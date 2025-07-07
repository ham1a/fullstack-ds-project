<template>
  <div class="users">
    <h1>{{ pageTitle }}</h1>

    <button @click="goBack" class="btn">{{ backButtonText }}</button>

    <div class="card-grid">
      <div class="card" v-for="user in posts" :key="user.id">
        <h3>{{ user.name }}</h3>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Phone:</strong> {{ user.phone }}</p>
        <p><strong>Company:</strong> {{ user.company.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ROUTES } from "../constants/routes.js";
import axios from "axios";

export default defineComponent({
  name: "Users",
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    pageTitle() {
      return "Users Page";
    },
    backButtonText() {
      return "Go Back";
    },
  },
  methods: {
    goBack() {
      this.$router.push(ROUTES.HOME);
    },
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      this.posts = response.data;
    });
  },
});
</script>

<style scoped>
.users {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  text-align: center;
}

h1 {
  font-size: 2rem;
  width: 100%;
  background-color: #42b883;
  padding: 20px;
  margin-bottom: 2rem;
  color: #fff;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.card {
  background-color: #f9f9f9;
  padding: 15px;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.card h3 {
  color: #42b883;
  margin-bottom: 10px;
}

.card p {
  margin: 5px 0;
}

.btn {
  padding: 12px 24px;
  font-size: 1.2rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #369870;
}
</style>
