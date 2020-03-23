<template>
  <div class="form">
    <h1>Formulaire</h1>
    <form>
      Nom<br><input type="text"><br>
      Prénom<br><input type="text"><br>
      <input type="submit" value="Envoyer">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form {
    width: 80%;
    height: 500px;
    background-color: #333;
    margin: auto;
    margin-top: 100px;
    color: #fff;
    padding: 10px;
  }

  form {
    background-color: #ddd;
    padding: 10px;
    color: #000;
  }

  input {
    border: 0;
    padding: 5px;
    width: 200px;
  }

  input[type="text"] {
    margin-bottom: 10px;
  }

  input[type="submit"] {
    margin-top: 10px;
    background-color: green;
    color: #fff;
  }
</style>
