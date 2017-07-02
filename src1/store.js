/**
 * Created by Administrator on 2017/3/26 0026 10:22.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state={
    count:10
};

const mutations={
    increment(state){//处理数据或状态的变化
        state.count++;
    },
    decrement(state){
        state.count--;
    }
};
const getters={
    count(state){
        return state.count;
    },
    getOdd(state){
        return state.count%2==0?'偶数':'奇数';
    }
}

const actions={
    increment:({commit})=>{
        console.log(commit);
        commit('increment');
    },
    decrement:({commit})=>{
        commit('decrement');
    },
    clickOdd:({commit,state})=>{
        console.log(state.count);
        if(state.count%2==0){
            commit('increment');
        }
    },
    clickAsync:({commit,state})=>{
        new Promise((resolve)=>{
            setTimeout(function () {
                commit('increment');
                resolve();
            },1000)
        })
    }
};

//export store
export default new Vuex.Store({
    actions,
    state,
    mutations,
    getters
});