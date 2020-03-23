<template>
  <div class="navbar">
      <router-link to="/">Accueil</router-link>
      <router-link to="/form">Formulaire</router-link>
      <router-link to="/about">A propos</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar {
    overflow: hidden;
    background-color: #333;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .navbar a, .navbar router-link {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  .navbar a:hover, .navbar router-link:hover {
    background: #ddd;
    color: black;
  }
</style>
