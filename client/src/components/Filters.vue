<template>
  <div class="filters">
    <div class="title">Filter</div>
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
      filters: "ASC"
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
  position: relative;
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
  font-size: 1.3em;
}
.filters select {
  color: black;
  margin: 0 5px;
  font-size: 1.3em;
}

.filters .title {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100px;
  background-color: black;
  color: gold;
  font-size: 1.6em;
}
</style>