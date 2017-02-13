import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import main from 'components/main'
import goods from 'components/goods'
import third from 'components/third'


Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },{
    	path:'/goods/:goodsId',
    	name:'goods',
    	component:goods
    },
    {
    	path:'/goods/:goodsId/third',
    	name:'third',
    	component:third
    }
  ]
})
