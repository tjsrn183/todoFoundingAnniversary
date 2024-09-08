<template>
  <div class="mainBody">
    <main-header-vue/>
    <input-box-vue/>
    <todo-list-vue/>
  </div>
</template>

<script>
import InputBoxVue from './InputBox.vue'
import MainHeaderVue from './MainHeader.vue'
import TodoListVue from './TodoList.vue'

export default {
  components:{
    MainHeaderVue,
    InputBoxVue,
    TodoListVue
  }

}
</script>

<style>
.mainBody{
  padding: 10% 30%;

}
</style>