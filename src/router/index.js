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
import resume from '@/page/Mine/resume'
import Course from '@/page/Course/course'
import Info from '@/page/Course/info'
import Directory from '@/page/Course/directory'
import Related from '@/page/Course/related'
import mask from '@/page/CourseList/mask'
import IT from '@/page/CourseList/menu-mt/IT'
import design from '@/page/CourseList/menu-mt/design'
import language from '@/page/CourseList/menu-mt/language'
import career from '@/page/CourseList/menu-mt/career'
import cap from '@/page/CourseList/menu-mt/cap'
import interest from '@/page/CourseList/menu-mt/interest'
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
      component: Mine
    },
    {
      path: '/resume',
      component: resume
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
      component: mask,
      children: [
        {
          path: '/menu-mt/IT',
          name: IT,
          component: IT
        },
        {
          path: '/menu-mt/design',
          name: design,
          component: design
        },
        {
          path: '/menu-mt/language',
          name: language,
          component: language
        },
        {
          path: '/menu-mt/career',
          name: career,
          component: career
        },
        {
          path: '/menu-mt/interest',
          name: interest,
          component: interest
        },
        {
          path: '/menu-mt/cap',
          name: cap,
          component: cap
        }
      ]
    }
  ]
})
