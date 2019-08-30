<template>
  <div>
    <Header />
    <SearchBar
      @getListCharacters="charactersList = $event"
      @getMessage="message = $event"
      @setSpinner="loading = $event"
      :filters="filters"
    />
    <Filters @getFilters="filters = $event" />
    <Message :textMessage="message" />
    <Spinner v-if="loading" />
    <List :list="charactersList" />
  </div>
</template>

<script>
import Header from "./Header.vue";
import SearchBar from "./SearchBar.vue";
import Filters from "./Filters.vue";
import Message from "./Message";
import List from "./List";
import Spinner from "./Spinner";

export default {
  name: "Layout",
  components: {
    Header,
    SearchBar,
    Filters,
    Message,
    List,
    Spinner
  },
  data() {
    return {
      filters: "",
      message: "",
      loading: false,
      charactersList: []
    };
  }
};
</script>

<style scoped>
</style>