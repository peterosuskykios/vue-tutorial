<script setup lang="ts">

// TS props
// Props su properties, ktore predava rodic potomkovi/komponentu
const props = defineProps<{
    first: string
    second: string
    id: number 
}>()

// TS emit
// Emits su akcie, ktore predava potomok rodicovi
const emit = defineEmits<{
    (e: 'tsemit'): void
}>()

// Spustenie emitu
function handleClick() {
    emit('tsemit')
}
</script>


<template>
    <!-- PROPS cez TS -->
    <h1>TS props od rodica {{ props.first }} {{ props.second }}, tvoje ID je: {{ props.id }}</h1>

    <!-- EMITS cez TS-->
    <button @click="handleClick">Posli TS emit rodicovi</button>

</template>