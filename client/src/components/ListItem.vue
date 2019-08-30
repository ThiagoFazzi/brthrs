<template>
  <li class="card">
    <p>
      <strong>Name:</strong>
      {{ name }}
    </p>
    <p>
      <strong>Height:</strong>
      {{ height }}
    </p>
    <p>
      <strong>Gender:</strong>
      {{ gender}}
    </p>
    <p>
      <strong>Mass:</strong>
      {{ mass}}
    </p>
    <p>
      <strong>Skin Color:</strong>
      {{ skinColor}}
    </p>
    <p>
      <strong>Hair Color:</strong>
      {{ hairColor}}
    </p>
    <p>
      <strong>Eye Color:</strong>
      {{ eyeColor}}
    </p>
    <p>
      <strong>Birth Year:</strong>
      {{ birthYear}}
    </p>
  </li>
</template>

<script>
export default {
  name: "ListItem",
  props: [
    "name",
    "height",
    "url",
    "gender",
    "mass",
    "skinColor",
    "hairColor",
    "eyeColor",
    "birthYear"
  ]
};
</script>

<style>
.card {
  border: 1px solid lightgray;
  background-color: white;
  padding: 10px;
  width: 200px;
  margin: 20px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
}
</style>