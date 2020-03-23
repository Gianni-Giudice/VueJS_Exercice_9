<template>
  <div id="app">
    <Navbar/>
    <Home/>
    <Form/>
    <About/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import Form from './components/Form.vue';
import About from './components/About.vue';

export default {
  name: 'App',
  components: {
    Navbar, 
    Home, 
    Form,
    About
  }
}
</script>

<style>
  body {
    margin-left: 0;
  }
</style>
