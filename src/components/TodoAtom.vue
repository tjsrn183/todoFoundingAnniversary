<template>
  <div class="atom">
    {{todo}}
    <button @click="$emit('remove')">지우기</button>
  </div>
</template>

<script>
export default {
props:['todo']
}
</script>

<style>

</style>