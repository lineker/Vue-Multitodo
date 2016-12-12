<template>
    <div id="todo-item-sortable">
        <todo-item v-for="item in todoItems" :key="item.todoId" :item-contents="item" :card-id="cardId" :todo-items="todoItems"></todo-card>
    </div>
</template>

<script>
import TodoItem from './TodoItem'
import store from '../store'
import Sortable from 'sortablejs'

export default {
  name: 'todoItemContainer',
  props: ['todoItems', 'cardId'],
  mounted: function () {
    let _ro = this.reorderTodoItem
    Sortable.create(this.$el, {
      handle: '.mdl-checkbox',
      animation: 20,
      onEnd: function (e) {
        _ro(e.oldIndex, e.newIndex)
      }
    })
  }, // TODO: fix dont drag last item
  store,
  methods: {
    reorderTodoItem (oldIdx, newIdx) { this.$store.commit({ type: 'reorderTodoItem', cardId: this.cardId, oldIdx: oldIdx, newIdx: newIdx }) }
  },
  components: {
    TodoItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
