<template>
  <div id="app">
    <img src="./assets/logo.png">
    <breadcrumbs />
    <router-view/>
  </div>
</template>

<script>
import Breadcrumbs from './components/Breadcrumbs'

export default {
  name: 'App',
  components: {
    Breadcrumbs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
