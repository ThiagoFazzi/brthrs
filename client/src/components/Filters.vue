<template>
  <div class="filters">
    <label for="sort">Height</label>
    <select @change="addFilter" v-model="filters">
      <option selected>ASC</option>
      <option>DESC</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      filters: ""
    };
  },
  methods: {
    addFilter(event) {
      this.$emit("getFilters", this.filters);
    }
  }
};
</script>

<style>
.filters {
  width: 90vw;
  margin: 0 auto;
}

.filters {
  margin: 10px auto;
  background-color: gold;
  height: 25px;
  text-align: center;
  padding: 15px 0;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
}

.filters label {
  color: black;
  margin: 0 15px;
  font-size: 1.3em;
}
.filters select {
  color: black;
  margin: 0 15px;
  font-size: 1.3em;
}
</style>