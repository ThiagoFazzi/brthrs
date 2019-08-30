<template>
  <div>
    <Layout class="layout" />
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";

export default {
  name: "app",
  components: {
    Layout
  }
};
</script>

<style>
.layout {
  width: 100vw;
}
</style>
