<template>
  <div class="search-bar">
    <input v-model="term" type="search" placeholder="type the name of Star Wars film" />
    <button @click="fetchCharactersByFilm">Search</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchBar",
  props: ["filters"],
  data() {
    return {
      term: "",
      characters: []
    };
  },
  methods: {
    fetchCharactersByFilm(event) {
      this.characters = [];
      this.$emit("getListCharacters", this.characters);
      this.$emit("getMessage", "");
      if (this.term) {
        this.$emit("setSpinner", true);
        axios
          .get(`http://localhost:3000/films/${this.term}/${this.filters}`)
          .then(result => {
            if (result.data.length === 0) {
              this.$emit("getMessage", "Not Found");
              this.$emit("setSpinner", false);
            } else {
              this.$emit("getMessage", "");
              this.characters = result.data;
              this.$emit("getListCharacters", this.characters);
              this.$emit("setSpinner", false);
            }
          })
          .catch(console.error);
      } else {
        this.$emit("getMessage", "Type a name of film");
      }
    }
  }
};
</script>

<style>
.search-bar {
  width: 90vw;
  margin: 0 auto;
  margin-top: 20px;
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