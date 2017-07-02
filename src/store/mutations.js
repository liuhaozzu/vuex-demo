/**
 * Created by Administrator on 2017/3/26 0026 11:39.
 */
import {INCREMENT} from './types'
import getters from './getters'
const state={
    count:20
}
const mutations={
    [INCREMENT](state){
        state.count++;
    }
};
export default {
    state,
    mutations,
    getters
}