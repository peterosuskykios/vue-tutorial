<script setup>
import Basic from './components/01_Basic.vue'
</script>

<template>
  <div class="container">
    <h1>Vue tutorial</h1>
    <Basic></Basic>
  </div>
</template>

<style scoped>
.container {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

</style>
