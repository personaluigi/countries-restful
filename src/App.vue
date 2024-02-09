<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import "./styles/countries.css";

export default {
  name: "App",
  components: {
    Navbar
  },
};
</script>