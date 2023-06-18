import { createRouter, createWebHistory } from "vue-router";
import AboutView from './views/AboutView.vue'
import ContactsView from './views/ContactsView.vue'
import ProjectsView from './views/ProjectsView.vue'
import SingleProject from './components/SingleProject.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        'path': '/project'
    },
    {
        'path': '/about',
        'name': 'about',
        'component': AboutView
    },
    {
        'path': '/contacts',
        'name': 'contacts',
        'component': ContactsView
    },
    {
        'path': '/projects',
        'name': 'projects',
        'component': ProjectsView
    },
    {
        'path':'/project/:slug',
        'name': 'single-project',
        'component': SingleProject
    }

    ]
})
export { router }