import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Classification from '@/page/Classification/classification'
import ITList from '@/page/Classification/ITList'
import DesignList from '@/page/Classification/DesignList'
import LanguageList from '@/page/Classification/LanguageList'
import Curriculum from '@/page/Curriculum/index'
import Mine from '@/page/Mine/mine'
import index from '@/page/Mine/index'
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
      children: [
        {
          path: 'ITList',
          name: 'ITList',
          component: ITList
        },
        {
          path: 'DesignList',
          name: 'DesignList',
          component: DesignList
        },
        {
          path: 'LanguageList',
          name: 'LanguageList',
          component: LanguageList
        }
      ]
    },
    {
      path: '/Curriculum',
      name: 'Curriculum',
      component: Curriculum
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine,
      children: [{
        path: '/Mine/index',
        component: index
      }]
    }
  ]
})
