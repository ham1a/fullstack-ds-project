<template>
  <router-link :to="to" class="nav-button">
    {{ label }}
  </router-link>
</template>

<script>
export default {
  props: {
    to: String,
    label: String,
  },
};
</script>

<style scoped>
.nav-button {
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  margin: 5px;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  display: inline-block;
  text-align: center;
}
</style>
