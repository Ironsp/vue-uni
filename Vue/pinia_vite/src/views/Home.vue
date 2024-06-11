<template>
  <div class="home">
    <h2>Home View</h2>
    <h2>count: {{ counterStore.count }}</h2>
    <h2>doubleCount: {{ counterStore.doubleCount }}</h2>
    <h2>doubleCountAddOne: {{ counterStore.doubleCountAddOne }}</h2>
    <h2>friend-111: {{ counterStore.getFriendById(111) }}</h2>
    <h2>friend-112: {{ counterStore.getFriendById(112) }}</h2>
    <h2>showMessage: {{ counterStore.showMessage }}</h2>
    <button @click="increment">修改state</button>
  </div>
</template>

<script setup>
  import useCounter from '@/stores/counter';

  const counterStore = useCounter()

/*   function increment() {
    counterStore.increment()
  } */
  const increment = () => counterStore.increment()

  counterStore.incrementAsync().then(res => {
    console.log("incrementAsync的action已经完成了:", res)
  })

  
</script>

<style scoped>
</style>

