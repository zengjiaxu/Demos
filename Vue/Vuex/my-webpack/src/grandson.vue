<template>
  <div id="grandson">
    <input type="button" value="减4" @click="removeDDb">
  </div>
</template>

<script>
  import {mapActions} from'vuex'  //module找getter  getter找state mapGetter获取所有数据,mapActions获取所有事件
export default {
  name: 'grandson',
  methods:mapActions(['removeDDb'])
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
