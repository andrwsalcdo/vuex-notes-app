import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

Vue.use(Vuex)

// the root, initial state object 
const state = {
    notes: [], 
    activeNote: {}
}

// define the possible mutations that can be applied to our state
const mutations = {
    ADD_NOTE (state) {
        const newNote ={
            text: 'New note', 
            favorite: false
        }
        // only mutators can mutate the state 
        state.notes.push(newNote)
        state.activeNote = newNote 
    },

    EDIT_NOTE (state, text) {
        state.activeNote.text = text 
    },

    DELETE_NOTE (state) {
        let index = state.notes.indexOf(state.activeNote)
        state.notes.splice(index, 1)
        state.activeNote = state.notes.length > 0 ? state.notes[0] : {}
    },

    TOGGLE_FAVORITE (state) {
        state.activeNote.favorite = !state.activeNote.favorite
    }, 

    SET_ACTIVE_NOTE (state, note) {
        state.activeNote = note 
    }
}

const getters = {
    activeNote: state => state.activeNote
}
// create the Vuex instance by combining the State and 
// mutations objects. 
// then export the Vuex Store for use by the components 
export default new Vuex.Store({
    state, 
    mutations, 
    actions, 
    getters
})