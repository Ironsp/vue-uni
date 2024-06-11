//定义一个user的state
import { defineStore } from 'pinia'

const useUser = defineStore('user', {
  state: () => ({
    count: 11,
    name: 'why',
    age: 25,
    level: 100,
  })
})

export default useUser

    








