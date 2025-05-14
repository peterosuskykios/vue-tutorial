<script setup>
import { ref } from 'vue'

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
    <nav>
      <router-link to="/">Basics</router-link>
      <router-link to="/ts">Typescript</router-link>
      <router-link to="/about">About</router-link>

      <router-view @logout="handleLogout" @tsemit="handleTsEmit" />
    </nav>
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
