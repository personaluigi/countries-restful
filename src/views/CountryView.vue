<template>
  <main class="box-country">
    <h1>Country Details:</h1>
    <div class="img-div">
      <img
        v-if="country && country.length > 0"
        :src="country[0]?.flags?.png"
        alt="flag_img"
      />
    </div>
    <article class="country-article" v-if="country && country.length > 0">
      <p><strong>Name:</strong> {{ country[0]?.name?.common }}</p>
      <p><strong>Official name:</strong> {{ country[0]?.name?.official }}</p>
      <p>
        <strong>Population:</strong>
        {{ formatPopulation(country[0]?.population) }}
      </p>
      <p><strong>Capital:</strong> {{ formatCapital(country[0]?.capital) }}</p>
      <p><strong>Continent:</strong> {{ country[0]?.region }}</p>
      <p><strong>Region:</strong> {{ country[0]?.subregion }}</p>
      <p>
        <strong>Currency:</strong> {{ formatCurrency(country[0]?.currencies) }}
      </p>
      <p>
        <strong>Language:</strong> {{ formatLanguage(country[0]?.languages) }}
      </p>
      <p><strong>Border:</strong> {{ formatBorders(country[0]?.borders) }}</p>
      <p>
        <strong>Map: </strong>
        <a :href="country[0]?.maps?.googleMaps" target="_blank">Google Maps</a>
      </p>
    </article>
    <div v-else>
      <p>Loading...</p>
    </div>
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
  </main>
</template>
  
  <script>
import axios from "axios";
import "../styles/country.css";

export default {
  data() {
    return {
      country: null,
      error: null,
    };
  },
  created() {
    this.fetchCountryDetails();
  },
  methods: {
    fetchCountryDetails() {
      const countryId = this.$route.params.details;
      const url = `https://restcountries.com/v3.1/alpha/${countryId}`;
      axios(url)
        .then((response) => {
          this.country = response.data;
        })
        .catch((error) => {
          console.error("Error fetching country details:", error);
          this.error =
            "Error fetching country details. Please try again later.";
        });
    },
    formatPopulation(population) {
      return population ? population.toLocaleString() : "";
    },
    formatCapital(capital) {
      return capital ? (Array.isArray(capital) ? capital[0] : capital) : "";
    },
    formatBorders(borders) {
      return borders
        ? Array.isArray(borders)
          ? borders.join(", ")
          : borders
        : "";
    },
    formatLanguage(languages) {
      return languages
        ? typeof languages === "object"
          ? Object.values(languages).join(", ")
          : languages
        : "";
    },
    formatCurrency(currencies) {
      if (currencies) {
        const currencyValues = Object.values(currencies);
        const currencyNames = currencyValues.map((currency) => currency.name);
        const currencySymbols = currencyValues.map(
          (currency) => currency.symbol
        );
        return (
          currencyNames.join(", ") + " (" + currencySymbols.join(", ") + ")"
        );
      }
      return "";
    },
  },
};
</script>  