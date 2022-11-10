<template>
  <div>
    <ul v-if="!pending">
      <li v-for="restaurant in restaurants.data" :key="restaurant.id">
        {{ restaurant.attributes.name }}
        <button @click="$router.push(`${$route.path}/restaurant/${restaurant.id}`)">Edit</button>
        <button @click="deleteRestaurant(restaurant.id)">Delete</button>
      </li>
    </ul>
    <div v-else>Loading...</div>
    <nuxt-link :to="`${$route.path}/restaurant/create`">Create</nuxt-link>
  </div>
</template>

<script setup>
const { data: restaurants, pending, refresh } = await useAsyncData(
  'restaurants', 
  () => $fetch("http://localhost:1337/api/restaurants")
)
onMounted(() => refresh())
const deleteRestaurant = async (restaurantId) => {
  await $fetch(`http://localhost:1337/api/restaurants/${restaurantId}`, {
    method: 'DELETE'
  })
  refresh()
}
</script>