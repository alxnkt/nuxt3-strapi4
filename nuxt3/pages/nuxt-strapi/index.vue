<template>
  <div>
    <ul v-if="!pending">
      <li v-for="restaurant in restaurants?.data" :key="restaurant.id">
        {{ restaurant.attributes.name }}
        <button @click="$router.push(`${$route.path}/restaurant/${restaurant.id}`)">Edit</button>
        <button @click="deleteRestaurant(restaurant.id)">Delete</button>
      </li>
    </ul>
    <div v-else>Loading...</div>
    <nuxt-link :to="`${$route.path}/restaurant/create`">Create</nuxt-link>
  </div>
</template>

<script setup lang="ts">
import type { Restaurant } from '~/types'
const { find, delete: remove } = useStrapi() // delete is keyword in JS, must not be used
const { data: restaurants, pending, refresh, error } = await useAsyncData(
  'restaurants',
  () => find<Restaurant>('restaurants')
)

onMounted(() => refresh())

const deleteRestaurant = async (restaurantId: number) => {
  await remove<Restaurant>("restaurants", restaurantId);
  refresh()
};
</script>