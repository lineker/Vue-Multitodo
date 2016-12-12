<template>
    <div class="cards-container" id="todo-card-sortable"> 
        <todo-card v-for="card in todoCards" :card-contents="card" :card-id="card.cardId"></todo-card>
    </div>

</template>

<script>
import TodoCard from './TodoCard'
import store from '../store'
import Sortable from 'sortablejs'

export default {
  name: 'todoCardContainer',
  props: ['todoCards'],
  mounted: function () {
    let _ro = this.reorderTodoCard
    Sortable.create(this.$el, {
      handle: '.mdl-card__title-text',
      animation: 20,
      onEnd: function (e) {
        _ro(e.oldIndex, e.newIndex)
      }
    })
  },
  store,
  methods: {
    reorderTodoCard (oldIdx, newIdx) { this.$store.commit({ type: 'reorderTodoCard', oldIdx: oldIdx, newIdx: newIdx }) }
  },
  components: {
    TodoCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards-container {
   padding: 25px;
   display: block;
   margin-right: auto;
   margin-left: auto;
}
</style>
