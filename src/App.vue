<script setup>
import { ref } from 'vue'
import Basic from './components/01_Basic.vue'
import TypeScript from './components/02_Typescript.vue'

const name      = ref("Peter")
const lastName  = ref("Osus")
const id        = ref(1)


// emit handler
function handleLogout() {
  alert('Pouzivatel odhlaseny')
  name.value = "neprihlaseny"
  lastName.value = "pouzivatel"
  id.value = 0
}

function handleTsEmit() {
  alert('Skuska emitu cez TS')
}

</script>

<template>
  <div class="container">

    <!-- Predavanie PROPS a EMITS             -->
    <!-- P: Text            - nemusim davat : -->
    <!-- P: Hodnota/value   - musim davat :   -->
    <!-- E: pouzi @ a funkciu                 -->
    <Basic :name="name" :lastname="lastName" :id="id" @logout="handleLogout"></Basic>
    <TypeScript first="first" second="second" :id=1 @tsemit="handleTsEmit"></TypeScript>
  </div>
</template>

<style scoped>
.container {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

</style>
