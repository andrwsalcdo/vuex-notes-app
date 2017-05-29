<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
import Toolbar from './Toolbar.vue'
import  NotesList from './NotesList'
import Editor from './Editor'

export default {
  components: {
    Toolbar, 
    NotesList, 
    Editor
  }
}
</script>

<style>
html, #app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
  height: 100%; 
}
body {
  border: 0; 
  height: 100%; 
  margin: 0; 
  max-height: 100%; 
  padding: 0; 
  position: relative; 
}
</style>
