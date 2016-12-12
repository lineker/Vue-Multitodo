<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-desktop-drawer-button">
    
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">Multitodo</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Desktop navigation -->
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <a class="mdl-navigation__link" href="/about">Themes</a>
          <a class="mdl-navigation__link" href="/about">About</a>
        </nav>
      </div>
    </header>

    <!-- Mobile navigation -->
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Multitodo</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="/about">Themes</a>
        <a class="mdl-navigation__link" href="/about">About</a>
      </nav>
    </div>

    <!-- FAB Button -->
    <button @click="addTodoCard" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-button--floating-action">
      <i class="material-icons">add</i>
    </button>

  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'todoNavbar',
  props: [],
  store,
  methods: {
    addTodoCard () { this.$store.commit('addTodoCard') }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mdl-button--floating-action {
  bottom:50px;
  margin-bottom:0px;
  padding-top:24px;  
  position:fixed;
  right:50px;  
  z-index:998;
}
</style>
