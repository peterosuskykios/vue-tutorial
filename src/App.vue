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
    <nav class="nav">
      <router-link to="/">Basics</router-link>
      <router-link to="/ts">Typescript</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <router-view @logout="handleLogout" @tsemit="handleTsEmit" />
  </div>
</template>

<style>
.container {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.nav a {
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.nav a:hover {
  background-color: #369f6b;
}
</style>
