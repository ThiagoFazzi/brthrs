<template>
  <div>
    <Header />
    <SearchBar @getFilmTerm="filmTerm = $event" />
  </div>
</template>

<script>
import Header from "./Header.vue";
import SearchBar from "./SearchBar.vue";

export default {
  name: "Layout",
  components: {
    Header,
    SearchBar
  },
  data() {
    return {
      filmTerm: ""
    };
  }
};
</script>

<style scoped>
</style>