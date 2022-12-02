// import {createApp} from 'vue'
import { createStore } from 'vuex'

const store=createStore({
    state(){
        return {
            con:68,
            dayList:[],
            length:5,
            userName: '小小美',
            lists:[
                {id:1,name:'mihray'},
                {id:2,name:'daMing'},
                {id:3,name:'daMing'},
                {id:4,name:'daMing'}
            ]
        }
    },

    getters:{
        showList(state){
            // const a=5
            const obj={id:state.length,name:'hehiehi'+state.length}
             state.lists.push(obj)
             state.length++
             return state.lists
            //  state.length++
        },
        // lengthCount(state){
        //     state.length++
        // }
    },

    mutations:{
        letConZero(state){
            state.con = 0;
        },
        pushNewDay(state, day) {
            state.dayList.push(day)
        },
        incount(state){
            state.con++
        },
        product(state){
            state.con=state.con*2
        }
    }
})

// const app=createApp({/*根组件*/})

// //将store 实例作为插件安装
// app.use(store)
// App.use(store)
export default store