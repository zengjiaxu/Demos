<template>
  <div id="app">
    <input type="button" value="加1" @click="add">
{{count}}{{msg}}
    <children></children>

  </div>
</template>

<script>
  import {mapGetters,mapActions} from'vuex'  //module找getter  getter找state mapGetter获取所有数据,mapActions获取所有事件
  import children from './children.vue'
export default {
  name: 'app',
  computed:mapGetters(['count','msg']),
  methods:mapActions(['add','removeDb']),
  components:{children}
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
