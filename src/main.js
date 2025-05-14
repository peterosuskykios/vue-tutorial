import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import BasicView from './components/Basic/Basic.vue'
import TypeScriptView from './components/Basic/Typescript.vue'
import AboutView from './components/Router/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: BasicView,
        props: {
            name: 'Peter',
            lastname: 'Osus',
            id: 1
        }
    },
    {
        path: '/ts',
        name: 'TypeScript',
        component: TypeScriptView,
        props: { 
            first: 'first', 
            second: 'second', 
            id: 1 
        }
    },  
    {
        path: '/about',
        name: 'About',
        component: AboutView
    }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App)
    .use(router)
    .mount('#app')
