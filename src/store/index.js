import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex) // this.$store对象

const state = {
  islogin: false
}

export default new Vuex.Store({
  state, // 状态 存放
  mutations, // 修改、改变、切换、下一个改变的定义
  getters,
  actions // 动作，组件不能直接改变state，改变谁？
})