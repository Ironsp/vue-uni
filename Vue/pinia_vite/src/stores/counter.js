// 定义关于counter的store
import { defineStore } from 'pinia'


import useUser from './user' //导入userstore

const useCounter = defineStore("counter", {
  state: () => ({
    count: 99,
    friends: [
      { id: 111, name: "why" },
      { id: 112, name: "kobe" },
      { id: 113, name: "james" },
    ],
    banners: [],
  
  }),
  getters: {
    //1.getters的基本使用(箭头函数[减少使用this])
    doubleCount: (state) => state.count * 2,
    //doubleCountAddOne: (state) => state.count * 2 + 1,
    //2.通过function函数访问getters函数
    doubleCountAddOne: function() {
      return this.doubleCount + 2
    },
    //3.getters支持返回一个函数
    getFriendById: function(state) {
      return (id) => {
        //return state.friends.find((item) => item.id === id)
        for(let i=0;i<state.friends.length;i++){
          if(state.friends[i].id === id){
            return state.friends[i]
          }
        }
      } 
    },
    //4.getters中用到别的store中的数据
    showMessage: function (state) {
      //4.1.获取user.js中的数据
      const userStore = useUser()
      //4.2获取自己的数据
      const count = state.count
      //4.3返回数据(模版字符串拼接字符)
      return `Hello ${userStore.name}, your count is ${count}`
    }



  },
  actions:{
    //1.Actions的基本使用
    increment(state){
      this.count++
    },
  /*   increment: function(state){
      this.count++
    }, */
    //2.Actions支持异步操作
    async incrementAsync(state){
      const res = await fetch("http://localhost:5173/users/count")
      //const data = await res.json()
      this.banners = res.data.banners.list
    
    }
  }
})

export default useCounter
