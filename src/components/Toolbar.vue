<template>
  <div id="toolbar">
      <i @click="addNote" className="glyphicon glyphicon-plus"></i>
      <i @click="toggleFavorite"
        className="glyphicon glyphicon-star"
        :class="{starred: activeNote.favorite}"></i>
      <i @click="deleteNote" className="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>

export default { 
    computed: {
        activeNote() {
           return this.$store.getters.activeNote  
        }
    }, 
    methods: {
        
    }
}
</script>

<style>

</style>
