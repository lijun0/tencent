## Vue2.0全家桶仿腾讯课堂（移动端）

最近在学习vue,觉得超好用，忍不住自己仿了个腾讯课堂练练手，不当之处还请大家指正（持续更新中）。

## 效果预览

>### 👉在线预览：[点我！！！在线预览，手机浏览或切换浏览器移动调试](https://lijun0.github.io/tencent-kecheng/)

>### 👉源码地址：[Github](https://github.com/lijun0/tencent)✨✨求你的小星星～

## ![动图预览](https://ooo.0o0.ooo/2017/06/21/594a72ea128ef.gif)
# 描述

### 前端部分

* SPA单页应用，webpack build to dist
* 移动设备兼容：使用flexible.js和rem处理兼容问题
* Vue Router 处理路由，vue的单页面应用是基于路由和组件的，路由用于设定访问路径，并将路径和组件映射起来
* axios做ajax请求
* melement-UI完成构建轮播图等组件

### 后端部分
* [mock模拟数据](www.easy-mock.com)好看又好用的模拟数据的平台
* express 做静态资源目录

### 待更新的功能
* 处理数据相关性，让课程和课程组件对应显示
* 改用 express 抛接口
* 用 express + mongodb 保存用户状态
* 使用 Vuex 管理组件间的状态，实现非父子组件之间的通信

## 具体功能实现

# 路由结构
传统的页面应用，是用一些超链接来实现页面切换和跳转的。vue-router单页面应用中，则是路径之间的切换，也就是组件的切换。
我们创建一个 router，传入的 routes 中的每一项即为一条路由（route）配置，表示在匹配给定的地址时，应该使用什么组件渲染视图。
```
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
    }]
```

## Vuex的使用
Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

需要注意：
Action 类似于 mutation，不同在于：
Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作。


### 使用

 npm install
 npm run dev
 
我的简历

[感兴趣请点我](http://orxfqlpdb.bkt.clouddn.com/%E5%BC%A0%E4%B8%BD%E5%90%9B%E7%9A%84%E7%AE%80%E5%8E%86%20%282%29.pdf)