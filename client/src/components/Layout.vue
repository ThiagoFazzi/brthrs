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
      charactersList: [
        { name: "t1", height: "t1", url: "t1" },
        { name: "t2", height: "t2", url: "t2" },
        { name: "t3", height: "t3", url: "t3" }
      ]
    };
  }
};
</script>

<style scoped>
</style>