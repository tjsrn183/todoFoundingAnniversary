<template>
  <div>
    <li v-for="(todo,index) in todos" :key="index">
    <todo-atom-vue :todo='todo' @remove='removeTodo(index)'></todo-atom-vue>
    </li>
  </div>
</template>

<script>
import TodoAtomVue from './TodoAtom.vue'
import {mapActions, mapState} from 'vuex'
export default {
components:{
    TodoAtomVue
},
computed:{
    ...mapState(['todos'])
},
methods:{
    ...mapActions(['removeTodo'])
}
}
</script>

<style>

</style>