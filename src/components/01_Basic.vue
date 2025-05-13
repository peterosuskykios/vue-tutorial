<script setup>
import { ref, reactive, computed, watch } from 'vue'

// Ref() pouzivam ak chcem reaktivnu 1 premennu - String, Number, Bool
// Hodnotu ziskame pomocou .value 
// V <template> sa .value nepouziva!
const count = ref(0)

// Reactive() pouzivam ak chcem reaktivny objekt, pole, Map alebo Set
// Pouzivame priamo, nema .value
const form = reactive({
  firstName: '',
  lastName: '',
  age: null
})

// Computed meno a priezvisko
const fullName = computed(() => `${form.firstName} ${form.lastName}`)

// watch - sleduj meno a loguj zmeny
watch (fullName, (newVal, oldVal) => {
    console.log(`Meno sa zmenilo z ${oldVal} na ${newVal}`)
})

const awesome = ref(true)
</script>


<template>
    <h1>Basic template</h1>

    <!-- Ref() pouzivam ak chcem reaktivnu 1 premennu -->
    <button @click="count++">Klikol si: {{ count }}</button>

    <!-- Reactive() pouzivam ak chcem reaktivne pole alebo viac objektov naraz -->
    <input v-model="form.firstName" placeholder="Meno" />
    <input v-model="form.lastName" placeholder="Priezvisko" />
    <input v-model="form.age" type="number" placeholder="Vek" />
    <p>Meno: {{ fullName }}, Vek: {{ form.age }}</p>
    
    <!-- Zmena stylu elementu podla hodnoty premennej -->
    <p :style="{ color: form.age < 18 ? 'red' : 'green' }">
        {{ form.age < 18 ? 'Neplnoletý' : 'Dospelý' }}
    </p>

    <button @click="awesome = !awesome">Toggle</button>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
</template>


<style>
p,
h1 {
    color: black;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>