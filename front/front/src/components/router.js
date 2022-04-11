import { createWebHistory , createRouter} from 'vue-router'
const routes = [
    {
        path:"/",
        alias:"/accueil",
        name:"accueil",
        component:() => import("./components/Accueil.vue")
    },
    {
        path:"/crm",
        alias:"/crm",
        name:"crm",
        component:() => import("./components/Crm.vue")
    },
];

const router = createRouter({

    history: createWebHistory(),
    routes,
})

export default router;

