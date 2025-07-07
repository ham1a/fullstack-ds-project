<template>
  <!-- <div>
    <h2>Comments</h2>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div> -->

  <div class="comments-container">
    <h2>Comments</h2>
    <button @click="goBack" class="btn">{{ backButtonText }}</button>
    <div class="card-grid">
      <div class="card" v-for="comment in posts" :key="comment.id">
        <h3>{{ comment.name }}</h3>
        <p><strong>Email:</strong> {{ comment.email }}</p>
        <p>{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ROUTES } from "../constants/routes.js";

export default {
  data() {
    return {
      posts: [],
    };
  },

  computed: {
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
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        this.posts = response.data;
      });
  },
};
</script>

<style scoped>
/* div {
  padding: 20px;
} */

.comments-container {
  padding: 20px;
  text-align: center;
}
h2 {
  font-size: 2rem;
  width: 100%;
  background-color: #42b883;
  padding: 20px;
  margin-bottom: 2rem;
  color: #fff;
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
