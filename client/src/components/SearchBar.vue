<template>
  <div class="search-bar">
    <input v-model="term" type="search" placeholder="type the name of Star Wars film" />
    <button @click="getTerm">Search</button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      term: ""
    };
  },
  methods: {
    getTerm(event) {
      this.$emit("getFilmTerm", this.term);
    }
  }
};
</script>

<style>
.search-bar {
  width: 90vw;
  margin: 0 auto;
}

.search-bar input {
  width: 85%;
  height: 40px;
  border: 3px solid black;
  font-size: 1.3em;
  padding-left: 10px;
}

.search-bar button {
  width: 15%;
  height: 40px;
  background-color: black;
  border: 3px solid gold;
  color: gold;
  font-size: 1.3em;
}
</style>