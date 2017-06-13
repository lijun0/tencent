<template>
  <div>
    <CateLeft></CateLeft>
    <div>
      <router-view></router-view>
    </div>
  </div>
  
</template>

<script>
import CateLeft from '../../components/public/CateLeft'
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  components: {
    CateLeft
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
