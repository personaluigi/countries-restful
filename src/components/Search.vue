<template>
  <div>
    <input v-model="searchTerm" type="text" class="searchCountry" placeholder="Search for a country" autocomplete="off" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: ''
    };
  },
  watch: {
    searchTerm() {
      this.$emit('search', this.searchTerm);
    }
  }
};
</script>

<style scoped>
.searchCountry {
  outline: none;
  min-width: 300px;
  display: block;
  margin: 3rem auto 3rem auto;
  padding: 10px 10px 10px 20px;
  font-size: 1.1rem;
  border-radius: 25px;
  border: 1px solid lightgray;
}
</style>