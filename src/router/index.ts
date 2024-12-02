import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Home from '../pages/Home.vue'
import Team from '../pages/Team.vue'
import NotFound from "../pages/NotFound.vue";
import PokemonDetail from "../pages/PokemonDetail.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Principal",
        component: () => Home,
    },
    {
        path: "/team",
        name: "Team",
        component: () => Team,
    },
    { 
        path: '/team/:id(\\d+)+', 
        props: { title: 'Pokemon por ID'},
        name: 'pokemon-id',
        component: () => PokemonDetail,
    },   
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: () => NotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
