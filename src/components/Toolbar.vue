<template>
  <div id="toolbar">
      <i @click="addNote" class="glyphicon glyphicon-plus"></i>
      <i @click="toggleFavorite"
        class="glyphicon glyphicon-star"
        :class="{starred: activeNote.favorite}"></i>
      <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
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
        addNote() {
            this.$store.dispatch('addNote')
        }, 
        toggleFavorite() {
            this.$store.dispatch('toggleFavorite')
        },
        deleteNote() {
            this.$store.dispatch('deleteNote')
        }
    }
}
</script>

<style>
#toolbar {
    background-color: #30414D; 
    color: #767676; 
    float: left; 
    height: 100%; 
    padding: 35px 25px 25px 25px; 
    width: 80px; 
}
#toolbar i {
    cursor: pointer; 
    font-size: 30px; 
    margin-bottom: 35px; 
    opacity: 0.8; 
    transition: opacity 0.5s ease; 
}
#toolbar i:hover {
    opacity: 1; 
}
.starred {
    color: #f7ae4f; 
}
</style>
