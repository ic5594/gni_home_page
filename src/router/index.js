import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Turnover from '../views/dropdown/turnover/Turnover.vue'
import Starmonmaster from '../views/dropdown/starmonmaster/Starmonmaster.vue'
import Legendofhero from '../views/dropdown/Legendofhero.vue'
import Monsteroffencehero from '../views/dropdown/Monsteroffencehero.vue'
import Goldrunner from '../views/dropdown/Goldrunner.vue'
import Toyracing from '../views/dropdown/Toyracing.vue'
import Kids from '../views/menu/Kids.vue'
import Comics from '../views/menu/Comics.vue'
import Event from '../views/menu/Event.vue'
import Faq from '../views/menu/Faq.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/turnover',
            name: 'Turnover',
            component: Turnover
        },
        {
            path: '/starmonmaster',
            name: 'Starmonmaster',
            component: Starmonmaster
        },
        {
            path: '/legendofhero',
            name: 'Legendofhero',
            component: Legendofhero
        },
        {
            path: '/monsteroffencehero',
            name: 'Monsteroffencehero',
            component: Monsteroffencehero
        },
        {
            path: '/goldrunner',
            name: 'Goldrunner',
            component: Goldrunner
        },
        {
            path: '/toyracing',
            name: 'Toyracing',
            component: Toyracing
        },
        {
            path: '/kids',
            name: 'Kids',
            component: Kids
        },
        {
            path: '/comics',
            name: 'Comics',
            component: Comics
        },
        {
            path: '/event',
            name: 'Event',
            component: Event
        },
        {
            path: '/faq',
            name: 'Faq',
            component: Faq
        },

    ]

});

export default router