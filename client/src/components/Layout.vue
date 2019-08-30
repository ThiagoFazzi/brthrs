<template>
  <div>
    <Header />
    <SearchBar @getFilmTerm="filmTerm = $event" />
    <Filters @getFilters="filters = $event" />
    <Message :textMessage="filmTerm" />
    <List :list="charactersList" />
  </div>
</template>

<script>
import Header from "./Header.vue";
import SearchBar from "./SearchBar.vue";
import Filters from "./Filters.vue";
import Message from "./Message";
import List from "./List";

export default {
  name: "Layout",
  components: {
    Header,
    SearchBar,
    Filters,
    Message,
    List
  },
  data() {
    return {
      filmTerm: "",
      filters: "",
      charactersList: []
    };
  }
};
</script>

<style scoped>
</style>