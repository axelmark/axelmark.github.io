import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'
import ContactView from '../views/ContactView.vue'
import GitHubView from '../views/GitHubView.vue'
import ServicesView from '../views/ServicesView.vue'   // импортируем

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: HomeView },
        { path: '/about', name: 'about', component: AboutView },
        { path: '/project/:id', name: 'project', component: ProjectView, props: true },
        { path: '/contact', name: 'contact', component: ContactView },
        { path: '/github', name: 'github', component: GitHubView },
        { path: '/services', name: 'services', component: ServicesView }   // новая страница
    ]
})

export default router