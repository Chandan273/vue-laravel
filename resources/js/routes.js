import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import BookAdd from './components/BookAdd.vue'
import BookShow from './components/BookShow.vue'

const routes = [
    { path: "/", component: Home },
    { path: "/:id", component: BookShow },
    { path: "/login", component: Login },
    { path: "/addbook", component: BookAdd },
]


const router = createRouter({ history: createWebHistory(), routes });

export default router;