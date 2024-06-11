<template>
  <div class="home">
    <h2>Welcome to Home views</h2>
    <h2>counter: {{ userStore.count }}</h2>
    <h3>age: {{ count }}</h3>
    <button @click="incrementCount">count+1</button>
    <hr>
    <h2>name: {{ name }}</h2>
    <h3>age: {{ age }}</h3>
    <h3>level: {{ level }}</h3>
  </div>
</template>

<script setup>
import {toRefs} from 'vue' //引入解构函数
import { storeToRefs } from 'pinia' //引入解构函数
import useUser from '@/stores/user.js';
const userStore = useUser() //引入store

//1.State的解构
//const {count} = userStore //不是响应式的
//const { count } = toRefs(userStore) //响应式的
const {count, name, age, level} = storeToRefs(userStore) //响应式的

const incrementCount = () => {
  userStore.count++
}
/* function incrementCount() {
  userStore.count++
} */


//2. State的方法
//2.1修改Store中的数据
userStore.name = 'Ironsp',
userStore.age = 18,
userStore.level = 99
//2.2重置Store中的数据
userStore.$reset()
//2.3改变Store中的数据
userStore.$patch({
  count: 100,
  name: 'Irons',
  age: 20,
  level: 150
})
//2.4替换State中的数据，可以是对象或者函数
userStore.$state = {
  level: 200,
}
console.log(userStore.level);


</script>

<style scoped>

</style>