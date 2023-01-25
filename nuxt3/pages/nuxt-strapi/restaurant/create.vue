<template>
  <div>
    <div><input type="text" v-model="name" /></div>
    <div><textarea v-model="description"></textarea></div>
    <button @click="createRestaurant();$router.go(-1)">Create</button>
    <button @click="$router.go(-1)">Cancel</button>
  </div>
</template>

<script setup lang="ts">
import type { Restaurant } from "~/types"
const { create } = useStrapi()
const name = ref("")
const description = ref("")
const createRestaurant = async () => {
  await create<Restaurant>("restaurants", { 
    name: name.value,
    description: description.value
  })
}
</script>
