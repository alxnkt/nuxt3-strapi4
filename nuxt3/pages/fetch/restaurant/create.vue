<template>
  <div>
    <div><input type="text" v-model="restaurant.name" /></div>
    <div><textarea v-model="restaurant.description"></textarea></div>
    <button @click="createRestaurant();$router.go(-1)">Create</button>
    <button @click="$router.go(-1)">Cancel</button>
  </div>
</template>
  
<script setup>
const restaurant = ref({ name: "", description: "" })
const createRestaurant = async () => {
  await $fetch("http://localhost:1337/api/restaurants", {
    method: "POST",
    body: {
      data: {
        name: restaurant.value.name,
        description: restaurant.value.description
      }
    }
  })
}
</script>