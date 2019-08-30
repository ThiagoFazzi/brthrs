<template>
  <div>
    <Header />
    <SearchBar @getFilmTerm="filmTerm = $event" />
    <Message :textMessage="filmTerm" />
  </div>
</template>

<script>
import Header from "./Header.vue";
import SearchBar from "./SearchBar.vue";
import Message from "./Message";

export default {
  name: "Layout",
  components: {
    Header,
    SearchBar,
    Message
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