<template>
  <div id="note-editor">
    <textarea 
        :value="activeNoteText" 
        @input="editNote"
        class="form-control">
    </textarea>
  </div>
</template>

<script>


export default {
    computed: {
        activeNoteText() {
            return this.$store.state.activeNote.text
        }
    }, 
    methods: {
        editNote(e) {
            this.$store.dispatch('editNote', e.target.value)
        }
    }
}    
</script>

<style>
#note-editor {
    height: 100%; 
    margin-left: 380px; 
}
#note-editor textarea {
    border: 0;
    border-radius: 0; 
    height: 100%; 
}
</style>
