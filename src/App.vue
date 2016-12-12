<template>
  <div id="app">

    <todo-navbar></todo-navbar>
  
    <br><br><br>
    <main class="mdl-layout__content">
      <div class="page-content">
        <todo-card-container :todo-cards="todoCards"></todo-card-container>
      </div>
    </main>

  </div>
</template>

<script>
import TodoNavbar from './components/TodoNavbar'
import TodoCardContainer from './components/TodoCardContainer'
import store from './store'
import { mapState } from 'vuex'

export default {
  name: 'app',
  store,
  computed: {
    ...mapState(['todoCards'])
  },
  components: {
    TodoNavbar,
    TodoCardContainer
  }
}
</script>

<style>
#app {}
</style>
