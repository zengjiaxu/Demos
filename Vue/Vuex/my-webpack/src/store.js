import Vue from 'vue'
import  Vuex from 'vuex'
Vue.use(Vuex);

const state={
  count:10,
  msg:"我是vuex的数据"
};
const mutations={
imAdd(){
  state.count++  //对应内部
},
  imAdd1(){
    state.count+=2  
  },
  remove(){
  state.count=state.count-2
  }
};
const actions={ //对应外界（module）
add({commit}){
 // alert(1)
  //commit('imAdd')
  if (state.count%2==1){
    commit('imAdd')
  }
  else{
    commit('imAdd1')
  }
},
removeDb({commit}){
  commit('remove')
},
  removeDDb({commit}){
  commit('remove');
  commit('remove');
  }
};
const getters={  //getter控制state  对应外界（module）
  count(state){
  return state.count
},
  msg(state){
    return state.msg
  }
};
export default new Vuex.Store({
  state,mutations,actions,getters
})
