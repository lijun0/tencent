import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Classification from '@/page/Classification/classification'
import ITList from '@/page/Classification/ITList'
import DesignList from '@/page/Classification/DesignList'
import LanguageList from '@/page/Classification/LanguageList'
import ExamList from '@/page/Classification/ExamList'
import InterestList from '@/page/Classification/InterestList'
import ProfessionList from '@/page/Classification/ProfessionList'
import Curriculum from '@/page/Curriculum/index'
import Mine from '@/page/Mine/mine'
import index from '@/page/Mine/index'
import Course from '@/page/Course/course'
import Info from '@/page/Course/info'
import Directory from '@/page/Course/directory'
import Related from '@/page/Course/related'
import mask from '@/page/CourseList/mask'
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
        },
        {
          path: 'ProfessionList',
          name: 'ProfessionList',
          component: ProfessionList
        },
        {
          path: 'ExamList',
          name: 'ExamList',
          component: ExamList
        },
        {
          path: 'InterestList',
          name: 'InterestList',
          component: InterestList
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
      }
      ]
    },
    {
      path: '/Course',
      name: 'Course',
      component: Course,
      children: [
        {
          path: 'Info',
          component: Info
        },
        {
          path: 'Directory',
          component: Directory
        },
        {
          path: 'Related',
          component: Related
        }
      ]
    },
    {
      path: '/CourseList/mask',
      name: mask,
      component: mask
    }
  ]
})
