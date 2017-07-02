/**
 * Created by Administrator on 2017/3/26 0026 11:39.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import mutations from './mutations'
import actions from './actions'

export default new Vuex.Store({
    actions,
    modules:{
        mutations
    }
})