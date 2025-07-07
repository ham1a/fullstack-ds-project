<template>
  <div class="home">
    <h1>{{ greeting }}</h1>
    <div class="button-group">
      <button @click="goToUsers" class="btn">{{ buttonTextUser }}</button>
      <button @click="goToPosts" class="btn">{{ buttonTextPost }}</button>
      <button @click="goToComments" class="btn">{{ buttonTextComment }}</button>
      <button @click="goToAlbums" class="btn">{{ buttonTextAlbums }}</button>
      <button @click="goToPhotos" class="btn">{{ buttonTextPhotos }}</button>
      <button @click="goToTodo" class="btn">{{ buttonTextTodo }}</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ROUTES } from "../constants/routes.js";
import NavButton from "../components/NavButton.vue";

export default defineComponent({
  components: {
    NavButton,
  },

  name: "Home",
  data() {
    return {
      // No reactive data needed for this component
    };
  },
  computed: {
    greeting() {
      return "Front End Project";
    },
    buttonTextUser() {
      return "Go to Users";
    },
    buttonTextPost() {
      return "Go to Posts";
    },
    buttonTextComment() {
      return "Go to Comments";
    },
    buttonTextAlbums() {
      return "Go To Albums";
    },
    buttonTextPhotos() {
      return "Go To Photos";
    },
    buttonTextTodo() {
      return "Go To Todo";
    },
  },
  methods: {
    goToUsers() {
      this.$router.push(ROUTES.USERS);
    },
    goToPosts() {
      this.$router.push(ROUTES.POSTS);
    },
    goToComments() {
      this.$router.push(ROUTES.COMMENTS);
    },
    goToAlbums() {
      this.$router.push(ROUTES.ALBUMS);
    },
    goToPhotos() {
      this.$router.push(ROUTES.PHOTOS);
    },
    goToTodo() {
      this.$router.push(ROUTES.TODO);
    },
  },
});
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}
/* .home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
} */

h1 {
  font-size: 4rem;
  margin-bottom: 2rem;
  color: #42b883;
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
