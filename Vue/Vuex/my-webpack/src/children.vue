<template>
  <div id="children">
    <input type="button" value="减2" @click="removeDb">

    <grandson></grandson>
  </div>
</template>

<script>
  import {mapActions} from'vuex'  //module找getter  getter找state mapGetter获取所有数据,mapActions获取所有事件
  import grandson from './grandson.vue'
export default {
  name: 'children',
  methods:mapActions(['removeDb']),
  components:{grandson}
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
