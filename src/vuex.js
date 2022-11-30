// import {createApp} from 'vue'
import { createStore } from 'vuex'

const store=createStore({
    state(){
        return {
            con:68,
            dayList:[],
            length:45,
            userName: '小小美',
        }
    },

    mutations:{
        letConZero(state){
            state.con = 0;
        },
        pushNewDay(state, day) {
            state.dayList.push(day)
        }
    }
})

// const app=createApp({/*根组件*/})

// //将store 实例作为插件安装
// app.use(store)
// App.use(store)
export default store