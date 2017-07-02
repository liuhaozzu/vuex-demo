/**
 * Created by Administrator on 2017/3/26 0026 11:40.
 */
import * as types from './types'
export default {
    increment:({commit})=>{
        commit(types.INCREMENT);
    }
}