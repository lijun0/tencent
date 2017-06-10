<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from './components/public/tabbar'
import vHeader from './components/public/head'
export default {
  name: 'app',
  components: {
    'tabbar': Tabbar,
    'vHeader': vHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
