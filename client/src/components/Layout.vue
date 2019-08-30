<template>
  <div>
    <Header />
    <SearchBar @getFilmTerm="filmTerm = $event" />
    <Filters @getFilters="filters = $event" />
    <Message :textMessage="filmTerm" />
  </div>
</template>

<script>
import Header from "./Header.vue";
import SearchBar from "./SearchBar.vue";
import Filters from "./Filters.vue";
import Message from "./Message";

export default {
  name: "Layout",
  components: {
    Header,
    SearchBar,
    Filters,
    Message
  },
  data() {
    return {
      filmTerm: "",
      filters: ""
    };
  }
};
</script>

<style scoped>
</style>