import Vue from 'vue';
import VueRouter from 'vue-router';
import CharacterDetails from "../pages/CharacterDetails.vue";
import Main from "../pages/Main.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/character/:id",
    component: CharacterDetails
  },
  {
    path: "/",
    component: Main
  }
]

const router = new VueRouter({
  routes,
})

export default router;
