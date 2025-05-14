<script setup>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

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

// watchEffetct - sleduje automaticky premennu ktoru pouziva
watchEffect(() => {
    console.log(`Aktualny count je: ${count.value}`)
})

// ELSE IF statement
const awesome = ref(true)

// Props su properties, ktore predava rodic potomkovi/komponentu
const props = defineProps(['name', 'lastname', 'id'])

// Emits su akcie, ktore predava potomok rodicovi
const emit = defineEmits(['logout'])

// Spustenie emitu
function handleLogout() {
    emit('logout')
}
</script>


<template>
  <div class="container">
    <!-- PROPS cez TS -->
    <h1>Vitaj {{ props.name }} {{ props.lastname }}, tvoje ID je: {{ props.id }}</h1>


    <!-- <h2>skuska props {{ props.name }}</h2> -->

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

    <!-- IF ELSE statement -->
    <button @click="awesome = !awesome">Aky je tvoj nazor na VUE?</button>

    <h1 v-if="awesome">Vue je uzasne!</h1>
    <h1 v-else>Tazkeeee 😢</h1>

    <!-- EMITS -->
    <button @click="handleLogout">Odhlasit</button>
  </div>
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