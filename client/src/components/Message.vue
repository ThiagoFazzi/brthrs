<template>
  <div class="message" v-if="textMessage">
    <p>{{ textMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: ["textMessage"]
};
</script>

<style>
.message {
  width: 90vw;
  margin: 0 auto;
}

.message p {
  font-size: 1.3em;
}
</style>
