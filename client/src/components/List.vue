<template>
  <div class="list" v-if="!list">
    <ul></ul>
  </div>
</template>

<script>
export default {
  name: "List",
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