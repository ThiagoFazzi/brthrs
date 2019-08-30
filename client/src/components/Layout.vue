<template>
  <div>
    <Header />
    <SearchBar
      @getListCharacters="charactersList = $event"
      @getMessage="message = $event"
      :filters="filters"
    />
    <Filters @getFilters="filters = $event" />
    <Message :textMessage="message" />
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
      filters: "",
      message: "",
      charactersList: []
    };
  }
};
</script>

<style scoped>
</style>