<template>
  <div class="list">
    <ul>
      <ListItem v-for="item in list" :key="item.url" :name="item.name" :height="item.height" />
    </ul>
  </div>
</template>

<script>
import ListItem from "./ListItem";

export default {
  name: "List",
  components: {
    ListItem
  },
  props: ["list"]
};
</script>

<style>
.list {
  width: 90vw;
  margin: 0 auto;
  align-items: center;
}

.list ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>