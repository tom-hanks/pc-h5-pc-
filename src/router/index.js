import Vue from 'vue'
import Router from 'vue-router'
//我的活动路由
// import home1 from '../components/home/home1/home1'
const home1 = () => import( /* webpackChunkName:"home1" */ '@/components/home/home1/home1');
// import home2 from '../components/home/home2'
const home2 = () => import( /* webpackChunkName:"home1" */ '@/components/home/home2');

const ediot = () => import( /* webpackChunkName:"home1" */ '@/components/home/ediot');

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '*',
            name: 'home1',
            component: home1,
        },
        {
            path: '/home2',
            name: 'home2',
            component: home2
        },
        {
            path: '/ediot',
            name: 'ediot',
            component: ediot
        }
    ]
})
