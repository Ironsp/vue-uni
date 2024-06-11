<template>
  <div class="home">
    <h2>Welcome to Home views</h2>
    <h2>counter: {{ counterStore.count }}</h2>
    
  </div>
</template>

<script setup>
 
  import useCounter from '@/stores/cuonter.js';

  const counterStore = useCounter()


</script>

<style scoped>

</style>