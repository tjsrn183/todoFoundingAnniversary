<template>
<div>
  <input v-model="newTodo" @keyup.enter="addTodoStore" placeholder="할 일을 입력하세요"/>
  <button @click="addTodoStore">Add Todo</button>
</div>
  
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            newTodo:'',
        }
    }
,
methods:{
    ...mapActions(['addTodo']),
    addTodoStore(){
        if(this.newTodo){
            this.addTodo(this.newTodo);
            this.newTodo='';
        }
    }
}
}
</script>

<style>

</style>