<template>
  <div class="hello">
    <h1>ADDRESS BOOK</h1>
    <p>by <a href="https://github.com/PawelRod/" target="_blank">PawelRod</a></p>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    msg: String
  }
}
</script>

<style lang="css" scoped>
  .hello {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  h1 {
    margin-bottom: 0;
  }
  p {
    font-family: "Comic Sans MS", cursive, sans-serif;
    margin-top: 10px;
    font-size: 12px;
  }
  a {
    text-decoration: none;
    background: red;
    color: white;
    padding: 5px;
    transition: background .4s;
  }
  a:hover {
    background: black;
  }
</style>
