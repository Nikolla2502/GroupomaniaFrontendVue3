
import { createRouter, createWebHistory } from "vue-router";
import Connexion from "@/views/connexion";
import Deconnexion from "@/views/deconnexion";
import Post from "@/views/post";

import Profil from "@/components/profil";
import Admin from "@/views/admin";

import Edit from "@/components/post/post_edit";
import Comment from "@/components/post/comment";

import NotFound from "@/views/NotFound.vue";


const routes = [
  {
    path: "/profil",
    name: "Profil",
    component: Profil,
  },
  {
    path: "/",
    name: "Connexion",
    component: Connexion,
  },
  {
    path: "/deconnexion",
    name: "Deconnexion",
    component: Deconnexion,
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
  },
  {
    path: "/edit",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/user",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/comment",
    name: "Comment",
    component: Comment,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFound,
    meta: {
      title: "404",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
