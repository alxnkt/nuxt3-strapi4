<template>
  <div>
    <div><input type="text" v-model="name" /></div>
    <div><textarea v-model="description"></textarea></div>
    <button @click="updateRestaurant();$router.go(-1)">Update</button>
    <button @click="$router.go(-1)">Cancel</button>
  </div>
</template>

<script setup lang="ts">
import type { Restaurant } from '~/types'

const { findOne, update } = useStrapi()

const route = useRoute()
const restaurantId: number = +route.params.id // cast to number

const response = await findOne<Restaurant>("restaurants", restaurantId)
const name = ref(response.data.attributes.name)
const description = ref(response.data.attributes.description)
const updateRestaurant = async () => {
  await update<Restaurant>("restaurants", restaurantId, { 
    name: name.value,
    description: description.value
  })
}
</script>
