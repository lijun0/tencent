import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Classification from '@/components/Classification/classification'
import ITList from '@components/Classification/ITList'
import DesignList from '@components/Classification/DesignList'
import LanguageList from '@components/Classification/LanguageList'
import Curriculum from '@/components/Curriculum/index'
import Mine from '@/components/Mine/mine'
import index from '@/components/Mine/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Classification',
      name: 'Classification',
      component: Classification,
      children:[
        {
          path:'/Classification/ITList',
          name: 'ITList',
          component: ITList 
        },
        {
          path:'/Classification/DesignList',
          name: 'DesignList',
          component: DesignList 
        },
        {
          path:'/Classification/LanguageList',
          name: 'LanguageList',
          component: LanguageList
        }
      ]
    },
    {
      path:'/Curriculum',
      name: 'Curriculum',
      component: Curriculum
    },
    {
      path:'/Mine',
      name: 'Mine',
      component: Mine,
      children:[{
        path: '/Mine/index',
        component: index
      }]
    }
  ]
})
