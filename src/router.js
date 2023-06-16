import { createRouter, createWebHistory } from "vue-router";
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ContactsView from './views/ContactsView.vue'
import ProjectsView from './views/ProjectsView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            'path': '/',/*  point_left: 'http://localhost:5174/home', */
            'name': 'home',
            'component': HomeView
        },
        {
            'path': '/about', /* point_left: 'http://localhost:5174/about', */
            'name': 'about Me',
            'component': AboutView
        },
        {
            'path': '/contacts', /* point_left: 'http://localhost:5174/contacts', */
            'name': 'contacts',
            'component': ContactsView
        },
        {
            'path': '/projects', /* point_left: 'http://localhost:5174/projects', */
            'name': 'projects',
            'component': ProjectsView
        }

    ]
})
export { router }