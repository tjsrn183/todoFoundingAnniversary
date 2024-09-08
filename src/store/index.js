import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        todos:[]
    },
    mutations:{
        ADD_TODO(state,todo){
            state.todos.push(todo);
        },
        REMOVE_TODO(state, todoIndex){
            state.todos.splice(todoIndex,1);
        }
    },
    actions:{
        addTodo({commit},todo){
            commit("ADD_TODO",todo);
        },
        removeTodo({commit},todoIndex){
            commit('REMOVE_TODO',todoIndex)
        }
    }
})