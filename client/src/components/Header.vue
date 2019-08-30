<template>
  <div class="header" />
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  text-align: center;
  background-color: transparent;
  background-image: url("../assets/star-wars-header.png"),
    url("../assets/bg.jpg");
  background-size: contain, cover;
  background-repeat: no-repeat, no-repeat;
  background-position-x: center, center;
  height: 20vh;
}
</style>