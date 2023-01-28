<template>
  <div>
    <div><input type="text" v-model="restaurant.name" /></div>
    <div><textarea v-model="restaurant.description"></textarea></div>
    <button @click="updateRestaurant();$router.go(-1)">Update</button>
    <button @click="$router.go(-1)">Cancel</button>
  </div>
</template>
  
<script setup>
const route = useRoute()
const response = await $fetch(`http://localhost:1337/api/restaurants/${route.params.id}`)
const restaurant = ref(response.data.attributes)
const updateRestaurant = async () => {
  await $fetch(`http://localhost:1337/api/restaurants/${route.params.id}`, {
    method: "PUT",
    body: {
      data: {
        name: restaurant.value.name,
        description: restaurant.value.description
      }
    }
  })
}
</script>