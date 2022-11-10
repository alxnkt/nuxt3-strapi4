<template>
  <div>
    <div><input type="text" v-model="restaurant.name" /></div>
    <div><textarea v-model="restaurant.description"></textarea></div>
    <button @click="updateRestaurant();$router.go(-1)">Update</button>
    <button @click="$router.go(-1)">Cancel</button>
    {{ restaurant }}
  </div>
</template>

<script setup lang="ts">
import type { Restaurant } from '~/types'
const route = useRoute()
const { findOne, update } = useStrapi()
const response = await findOne<Restaurant>("restaurants", route.params.id)
const restaurant : Restaurant = ref(response.data.attributes)
const updateRestaurant = async () => {
  await update<Restaurant>("restaurants", route.params.id, { 
    name: restaurant.value.name, 
    description: restaurant.value.description })
}
</script>
