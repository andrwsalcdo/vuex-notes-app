<template>
    <div id="notes-list">
        <div id="list-header">
            <h2>Vue2 & Vuex Notes App</h2>
            <div class="btn-group btn-group-justified" role="group">
                <!-- All notes  -->
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default"
                        @click="show = 'all'"
                        :class="{active: show === 'all'}">
                        All Notes
                    </button>
                </div>
                <!-- Favorites -->
                 <div class="btn-group" role="group">
                    <button type="button" class="btn btn-secondary"
                        @click="show = 'favorites'"
                        :class="{active: show === 'favorites'}">
                        Favorites
                    </button>
                </div>
            </div>
        </div>
        <!-- render notes in a list  -->
        <div class="container">
            <div class="list-group">
                <a v-for="note in filteredNotes"
                    class="list-group-item" href="#"
                    :class="{active: activeNote === note}"
                    @click="updateActiveNote(note)">
                    <h4 class="list-group-item-heading">
                        {{ note.text.trim().substring(0,30)}}
                        <!-- Note List title is the 1st 30 char of string-->
                    </h4>
                </a>
            </div>
        </div>

    </div> <!-- end notes-list -->
</template>


<script>
// import this action so user can select a note from the list 
import { updateActiveNote } from '../actions.js'

export default {
    data() {
        return {
            show: 'all'
        }
    }, 
    methods: {
        updateActiveNote(note) {
            this.$store.dispatch('updateActiveNote', note)
        }
    }, 
    computed: {
        notes() {
            return this.$store.state.notes
        }, 
        activeNote() {
            return this.$store.getters.activeNote 
        }, 
        filteredNotes() {
            if(this.show === 'all') {
                return this.notes 
            } else if (this.show === 'favorites') {
                return this.notes.filter(note => note.favorite)
            }
        }
    }
}
</script>

<style>
#notes-list {
    background-color: #f5f5f5; 
    float: left; 
    font-family: 'Arial', sans-serif; 
    font-weight: 400; 
    height: 100%; 
    width: 300px; 
}
#list-header {
    padding: 5px 25px 25px 25px; 
}
#list-header h2 {
    font-size: 22px; 
    font-weight: 300; 
    padding-bottom: 8px; 
    text-align: center; 
    text-transform: uppercase; 
}
#notes-list .container {
    height: calc(100% - 137px); 
            max-height: calc(100% - 137px); 
            overflow: auto; 
    width: 100%; 
    padding: 0; 
}
#notes-list .container .list-group-item {
    border: 0; 
    border-radius: 0; 
}
.list-group-item-heading {
    font-size: 15px; 
    font-weight: 300; 
}
</style>
