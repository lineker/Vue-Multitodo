<template>
<div class="mdl-card mdl-shadow--2dp">

  <div class="mdl-card__title">

    <h2 :id="cardContents.cardId + 'title'" v-show="!editingCardTitle" @dblclick="toggleEditingCardTitle" class="mdl-card__title-text">{{cardContents.cardTitle}}</h2>
    <div class="mdl-tooltip" :data-mdl-for="cardContents.cardId + 'title'">
      Double-click to edit
    </div>
    
    <div v-show="editingCardTitle" class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" :value="cardContents.cardTitle" @input="editTodoCardTitle" type="text" :id="cardTitleTextboxId" @blur="toggleEditingCardTitle">
        <label class="mdl-textfield__label" :for="cardTitleTextboxId">{{cardContents.cardTitle}}</label>
    </div>

  </div>

  <div class="mdl-card__menu">
    <button :id="cardContents.cardId + 'delete'" @click="deleteTodoCard" class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
      <i class="material-icons">delete</i>
    </button>
  </div>

  <div class="mdl-card__actions mdl-card--border">
    <todo-item-container :todo-items="cardContents.todoItems" :card-id="cardContents.cardId"></todo-item-container>
  </div>

</div>
</template>

<script>
import TodoItemContainer from './TodoItemContainer'
import store from '../store'

export default {
  name: 'todoCard',
  props: ['cardContents'],
  data: function () {
    return {
      cardTitleTextboxId: 'titleInput:' + this.cardContents.cardId,
      editingCardTitle: false
    }
  },
  store,
  /* eslint-disable no-undef */
  updated: function () { componentHandler.upgradeAllRegistered() },
  methods: {
    deleteTodoCard: function (e) { this.$store.commit({ type: 'deleteTodoCard', cardId: this.cardContents.cardId }) },
    editTodoCardTitle: function (e) { this.$store.commit({ type: 'editTodoCardTitle', cardId: this.cardContents.cardId, title: e.target.value }) },
    toggleEditingCardTitle: function () {
      const _id = this.cardTitleTextboxId
      if (!this.editingCardTitle) {
        window.setTimeout(function () {
          document.getElementById(_id).focus()
        }, 0)
      }
      this.editingCardTitle = !this.editingCardTitle
    }
  },
  components: {
    TodoItemContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mdl-card {
    width: 100%;
    max-width: 350px;
    padding: 10px;
    margin: 0 4px 16px;
    display: inline-block;
    vertical-align: top;
}
</style>
