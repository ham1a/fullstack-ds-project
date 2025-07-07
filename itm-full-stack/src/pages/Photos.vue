<template>
  <!-- <div>
    <h2>photos</h2>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div> -->

  <div class="photos-container">
    <h2>photos</h2>
    <button @click="goBack" class="btn">{{ backButtonText }}</button>
    <div class="card-grid">
      <div class="card" v-for="photo in photos" :key="photo.id">
        <img :src="photo.thumbnailUrl" :alt="photo.title" class="thumbnail" />
        <h3>{{ photo.title }}</h3>
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
      photos: [],
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
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        this.photos = response.data;
      });
  },
};
</script>

<style scoped>
/* div {
  padding: 20px;
} */

.photos-container {
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

.thumbnail {
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 10px;
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
