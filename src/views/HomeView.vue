<template>
  <Search @search="handleSearch" />
  <main class="container">
    <div
      v-for="item in filteredCountries"
      :key="item.name.common"
      class="box-container"
      id="{{ item.cca2 }}"
    >
      <img :src="item.flags.png" alt="flag_img" />
      <div class="country-content">
        <h3>{{ item.name.common }}</h3>
        <p>
          <strong>Population:</strong> {{ formatPopulation(item.population) }}
        </p>
        <p><strong>Capital:</strong> {{ formatCapital(item.capital) }}</p>
        <p><strong>Region:</strong> {{ item.region }}</p>
        <router-link :to="{ name: 'country', params: { details: item.cca2 } }"
          ><button type="button" class="btn btn-warning">
            More +
          </button></router-link
        >
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import Search from "../components/Search.vue";

export default {
  components: {
    Search,
  },
  data() {
    return {
      countries: [],
      searchTerm: "",
    };
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    fetchCountries() {
      const url = "https://restcountries.com/v3.1/all";
      axios(url)
        .then((response) => {
          this.countries = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    handleSearch(searchTerm) {
      this.searchTerm = searchTerm;
    },
    formatPopulation(population) {
      return population.toLocaleString();
    },
    formatCapital(capital) {
      if (Array.isArray(capital)) {
        return capital[0];
      }
      return capital;
    },
  },
  computed: {
    filteredCountries() {
      if (!this.searchTerm) {
        return this.countries;
      }
      return this.countries.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())
      );
    },
  },
};
</script>