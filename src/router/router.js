import { createRouter, createWebHashHistory } from 'vue-router'

//Paginas
import BienvenidaPage from '@/pages/BienvenidaPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import VentaPage from '@/pages/VentaPage.vue'
import ProductoPage from '@/pages/ProductoPage.vue'

//Rutas
const routes =[
    {
        path:'/',
        component: BienvenidaPage
    },
    {
        path:'/venta',
        component: VentaPage
    },
    {
        path:'/producto',
        component: ProductoPage
    },
    {
        path:'/:pathMatch(.*)*',
        component: NotFoundPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router