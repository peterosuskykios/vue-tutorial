# ✅ Vue 3 + TypeScript Študijný plán
 
## 🧩 Modul 1: Základy Vue 3 + Composition API
### 🎯 Cieľ:
•	Pochopiť reaktivitu, štruktúru komponentu a prácu s <script setup>.

### ✅ Checklist:
•	ref, reactive
•	computed
•	watch, watchEffect
•	<template>, <script setup>, <style>
•	Props & emits s TypeScriptom

### 🧪 Cvičenia:
1.	Vytvor komponent, ktorý počíta kliky (ref)
2.	Reaktívna forma s reactive objektom (meno, vek)
3.	Zmeň štýl elementu podľa hodnoty (napr. červený, ak je vek < 18)
4.	computed: vytvor fullName z firstName a lastName
5.	watch: sleduj zmenu mena a vypíš do konzoly
6.  Typescript props a emity
 
https://github.com/peterosuskykios/vue-tutorial/blob/main/src/components/01_Basic.vue


## 🧩 Modul 2: Vue Router
### 🎯 Cieľ:
•	Pridať stránkovanie do aplikácie a navigovať medzi komponentmi
### ✅ Checklist:
•	Inštalácia Vue Router
•	Definícia routes
•	router-view, router-link
•	Dynamické parametre (/user/:id)
•	Navigácia cez router.push()
### 🧪 Cvičenia:
1.	Nastav 3 stránky: Home, Users, About
2.	Prejdi z menu cez <router-link>
3.	Zobraz detail používateľa podľa ID (/user/123)
4.	Pridaj NotFound stránku
 
 
## 🧩 Modul 3: Reaktivita – hlbšie
### 🎯 Cieľ:
•	Rozlíšiť ref, reactive, toRef, toRefs, shallowRef atď.
### ✅ Checklist:
•	ref vs reactive
•	toRefs, toRef
•	readonly
•	shallowRef, customRef
### 🧪 Cvičenia:
1.	Premapuj reactive objekt na toRefs
2.	Vytvor readonly store (readonly)
3.	Vytvor customRef s debounce
 
 
## 🧩 Modul 4: Lifecycle hooks
### 🎯 Cieľ:
•	Vložiť logiku do správneho momentu životného cyklu
### ✅ Checklist:
•	onMounted, onUnmounted
•	onUpdated, onBeforeMount
•	Cleanup (event listener)
### 🧪 Cvičenia:
1.	Vypíš „Komponent načítaný“ v onMounted
2.	Pridaj interval v onMounted, zruš ho v onUnmounted
3.	Sleduj scrollovanie stránky pomocou addEventListener
 
 
## 🧩 Modul 5: keep-alive + dynamické komponenty
### ✅ Checklist:
•	Použitie <keep-alive> s router-view
•	Dynamické prepínanie komponentov (<component :is="..." />)
### 🧪 Cvičenia:
1.	Vytvor 2 formuláre a prepínaj ich cez dropdown
2.	Zabal ich do <keep-alive>, aby si uchovali stav
 
 
## 🧩 Modul 6: PrimeVue (UI knižnica)
### ✅ Checklist:
•	Inštalácia a konfigurácia
•	Použitie komponentov: Button, InputText, DataTable, Dialog
•	Téma / dizajn
### 🧪 Cvičenia:
1.	Vytvor formulár s InputText, Dropdown
2.	Zobraz tabuľku dát s DataTable
3.	Ovládaj Dialog okno pomocou stavu
 
 
## 🧩 Modul 7: Pinia (store)
### ✅ Checklist:
•	Inštalácia
•	defineStore
•	state, getters, actions
•	Typovanie v TS
### 🧪 Cvičenia:
1.	Vytvor store na správu zoznamu úloh
2.	Pridaj getter na počet hotových úloh
3.	action na pridanie a odstránenie úlohy
 
 
## 🧩 Modul 8: CASL (Access control)
### ✅ Checklist:
•	Inštalácia CASL
•	Definovanie schopností (defineAbility)
•	Podmienené zobrazenie komponentov
### 🧪 Cvičenia:
1.	Definuj práva admin / user
2.	Skry zobrazenie tlačidla pre bežného používateľa
3.	Otestuj rôzne role pomocou can('update', 'Post')
 
 
## 🧩 Modul 9: Vuelidate (form validácia)
### ✅ Checklist:
•	Inštalácia Vuelidate
•	useVuelidate s reactive modelom
•	Validátory: required, minLength, email, vlastné
### 🧪 Cvičenia:
1.	Vytvor prihlasovací formulár
2.	Pridaj validáciu pre email + heslo
3.	Zobraz chybové hlášky

