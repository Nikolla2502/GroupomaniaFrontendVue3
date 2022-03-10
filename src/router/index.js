
import { createRouter, createWebHistory } from "vue-router";
import Connexion from "@/views/connexion";
import Post from "@/views/post";
import Deconnexion from "@/views/deconnexion";
import Admin from "@/views/admin";
import Profil from "@/components/profil";

import Edit from "@/components/post/post_edit";
import Comment from "@/components/post/comment";



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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
