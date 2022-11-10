<template>
  <div>
    <div><input type="text" v-model="restaurant.name" /></div>
    <div><textarea v-model="restaurant.description"></textarea></div>
    <button @click="createRestaurant();$router.go(-1)">Create</button>
    <button @click="$router.go(-1)">Cancel</button>
    {{ restaurant }}
  </div>
</template>

<script setup lang="ts">
import type { Restaurant } from "~/types"
const { create } = useStrapi()
const restaurant = ref({ name: "", description: "" })
const createRestaurant = async () => {
  await create<Restaurant>("restaurants", { 
    name: restaurant.value.name, 
    description: restaurant.value.description })
}
</script>
