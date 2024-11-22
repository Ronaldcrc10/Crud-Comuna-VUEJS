<template>
  <div id="app">
    <h1>Gestión de Comunas</h1>
    <ComunaList />
  </div>
</template>

<script>
import ComunaList from './components/ComunaList.vue';

export default {
  components: {
    ComunaList,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
