import { createRouter, createWebHashHistory } from "vue-router";

import userForm from "./components/userForm.vue";
import userPreview from "./components/userPreview";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/form", component: userForm, alias: "/" },
    { path: "/preview", component: userPreview },
  ],
});
