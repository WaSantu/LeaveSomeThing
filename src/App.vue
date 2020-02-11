<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
@font-face
{
font-family: s;
src: url('./assets/font/SourceHanSansCN-Normal.ttf')
}
#app {
  font-family: s;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
    margin: 0;
    padding: 0;
}
input {
    appearance: none;
    border: none;
    outline: none;
}
input,textarea {
    font-family: s;
}
::placeholder {
    color: #dcdfe5;
}
</style>
