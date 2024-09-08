<template>
  <div id="app">
    <side-bar-vue/>
    <main-panel/>
  </div>
</template>

<script>
import MainPanel from './components/MainPanel.vue'
import SideBarVue from './components/SideBar.vue'


export default {
  name: 'App',
  components: {
    SideBarVue,
    MainPanel
      }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: var(--main-color);

}
#app {

}
</style>
