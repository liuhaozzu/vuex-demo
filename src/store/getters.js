/**
 * Created by Administrator on 2017/3/26 0026 11:40.
 */
export default {
    count:(state)=>{
        return state.count;
    },
    getOdd:(state)=>{
        return state.count%2==0?'偶数':'奇数';
    }
}