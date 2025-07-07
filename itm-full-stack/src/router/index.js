import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Users from "../pages/Users.vue";
import Posts from "../pages/Posts.vue";
import Comments from "../pages/Comments.vue";
import Albums from "../pages/Albums.vue";
import Photos from "../pages/Photos.vue";
import Todo from "../pages/Todo.vue";
import { ROUTES, ROUTE_NAMES } from "../constants/routes.js";

const routes = [
  {
    path: ROUTES.HOME,
    name: ROUTE_NAMES.HOME,
    component: Home,
  },
  {
    path: ROUTES.USERS,
    name: ROUTE_NAMES.USERS,
    component: Users,
  },
  {
    path: ROUTES.POSTS,
    name: ROUTE_NAMES.POSTS,
    component: Posts,
  },
  {
    path: ROUTES.COMMENTS,
    name: ROUTE_NAMES.COMMENTS,
    component: Comments,
  },
  {
    path: ROUTES.ALBUMS,
    name: ROUTE_NAMES.ALBUMS,
    component: Albums,
  },
  {
    path: ROUTES.PHOTOS,
    name: ROUTE_NAMES.PHOTOS,
    component: Photos,
  },
  {
    path: ROUTES.TODO,
    name: ROUTE_NAMES.TODO,
    component: Todo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
