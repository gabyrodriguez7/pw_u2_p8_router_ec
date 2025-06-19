import { createRouter, createWebHistory } from "vue-router";
import EstudianteView from "../views/EstudianteView.vue";
import EstudianteTablaView from "../views/EstudianteTablaView.vue";
import MascotaView from "../views/MascotaView.vue";
import PokemonView from "../views/PokemonView.vue";
import ResponsivoView from "@/views/ResponsivoView.vue";

const routes = [
    {
    path: "/responsivo",
    name: "ResponsivoView",
    component: ResponsivoView,
  },
  {
    path: "/estudiante/:cedula",
    name: "estudianteView",
    component: EstudianteView,
  },
  {
    path: "/estudianteTabla",
    name: "EstudianteTablaView",
    component: EstudianteTablaView,
  },
  {
    path: "/mascota",
    name: "mascotaView",
    component: MascotaView,
  },
    {
    path: "/pokemon/",
    name: "pokemonView",
    component: PokemonView,
  },
  {
    path: "/contador/numeros",
    name: "contadorView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "ContadorView" */ "../views/ContadorView.vue"
      ),
  },
  {
    path: "/buscarPais",
    name: "paisView",

    component: () =>
      import(/* webpackChunkName: "PaisView" */ "../views/PaisView.vue"),
  },
  {
    path: "/preguntaYesNo",
    name: "preguntaView",

    component: () =>
      import(
        /* webpackChunkName: "PreguntaView" */ "../views/PreguntaView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
