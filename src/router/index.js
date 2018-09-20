import Vue from 'vue'
import Router from 'vue-router'
import Vip from '../components/vip.vue'
import Carshop from '../components/carshop.vue'
import Serach from '../components/serach.vue'
import Home from '../components/home.vue'
import Shehui from '../components/shehui.vue'
import Yule from '../components/yule.vue'
import Qiche from '../components/qiche.vue'
import NBA from '../components/nba.vue'
import Keji from '../components/keji.vue'
import Junshi from '../components/junshi.vue'
import Detail from '../components/detail.vue'
import CarDetail from '../components/carDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/home'},
    {path: '/shehui',name: 'Shehui',component:Shehui},
    {path: '/yule',name: 'Yule',component:Yule},
    {path: '/qiche',name: 'Qiche',component:Qiche},
    {path: '/nba',name: 'NBA',component:NBA},
    {path: '/keji',name: 'Keji',component:Keji},
    {path: '/shehui',name: 'Shehui',component:Shehui},
    {path: '/junshi',name: 'Junshi',component:Junshi},
    {path: '/home',name: 'home',component: Home},
    {path: '/vip',name: 'viper',component: Vip},
    {path: '/carshop',name: 'car',component:Carshop},
    {path: '/serach',name: 'seracher',component: Serach},
    {path: '/detail',name: 'detail',component: Detail},
    {path: '/carDetail',name: 'CarDetail',component: CarDetail}
  ],
  linkActiveClass:'mui-active'
})
