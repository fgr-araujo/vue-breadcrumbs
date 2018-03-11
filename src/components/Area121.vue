<template>
  <div>
    <h1>Area 1 - 2 - 1</h1>
    <router-link :to="{ name: 'Area1' }">Go to Area 1</router-link>
    <router-link :to="{ name: 'Area12' }">Go to Area 1 - 2</router-link>
    <router-link :to="{ name: 'Area2' }">Go to Area 2</router-link>
  </div>
</template>

<script>
export default {
  name: 'Area121',
  data () {
    return {}
  }
}
</script>

<style scoped>
a {
  margin: 0 10px;
}
</style>
