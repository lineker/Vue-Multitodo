<template>
    <div @mouseenter="toggleDisplayingCloseButton" @mouseleave="toggleDisplayingCloseButton">


        <label id="todo-checkbox" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" :for="todoCheckboxId">
            <input type="checkbox" :id="todoCheckboxId" class="mdl-checkbox__input" :checked="itemContents.completed" @change="editTodoItemCompletion">
        </label>

        <div id="todo-text" class="mdl-textfield mdl-js-textfield">
            <input @keyup.enter="addTodoItemIfLastTodo" class="mdl-textfield__input" type="text" :id="todoTextboxId" :value="itemContents.text" @input="editTodoItemText">
            <label class="mdl-textfield__label" :for="todoTextboxId">{{itemContents.text}}</label>
        </div>

            <button id="todo-delete" v-show="displayingCloseButton" class="mdl-button mdl-js-button mdl-button--icon" @click="deleteTodoItem">
                <i class="material-icons small-icon">close</i>
            </button>
  

    </div>
</template>

<script>
export default {
  name: 'todoItem',
  props: ['itemContents', 'cardId', 'todoItems'],
  data: function () {
    return {
      displayingCloseButton: false,
      todoCheckboxId: 'itemCompletion:' + this.cardId + this.itemContents.todoId,
      todoTextboxId: 'itemText:' + this.cardId + this.itemContents.todoId
    }
  },
  /* eslint-disable no-undef */   /* eslint-disable eqeqeq */
  updated: function () {},
  mounted: function () { this.focusMe(); componentHandler.upgradeAllRegistered() },
  methods: {
    toggleDisplayingCloseButton: function (e) { this.displayingCloseButton = !this.displayingCloseButton },
    focusMe: function (e) { document.getElementById(this.todoTextboxId).focus() },
    addTodoItemIfLastTodo: function (e) { if (this.todoItems[this.todoItems.length - 1].todoId === this.itemContents.todoId) { this.addTodoItem() } }, // TODO: allow adding items in any position

    deleteTodoItem: function (e) {
      if (this.todoItems.length == 1) {
        this.$store.commit({ type: 'deleteTodoCard', cardId: this.cardId })
      } else {
        this.$store.commit({ type: 'deleteTodoItem', cardId: this.cardId, todoId: this.itemContents.todoId })
      }
    }, // TODO: only delete if not last item
    editTodoItemText: function (e) { this.$store.commit({ type: 'editTodoItemText', cardId: this.cardId, todoId: this.itemContents.todoId, text: e.target.value }) },
    editTodoItemCompletion: function (e) { this.$store.commit({ type: 'editTodoItemCompletion', cardId: this.cardId, todoId: this.itemContents.todoId, completion: e.target.checked }) },
    addTodoItem: function (e) { this.$store.commit({ type: 'addTodoItem', cardId: this.cardId, text: '' }) }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#todo-checkbox {display:inline-block; margin-right:10px; width:0px;} 
#todo-text {display:inline-block; width:270px;} 
#todo-delete {display:inline-block; right:0px; position:absolute; padding-right:0px; margin-top: 15px;}
.small-icon {font-size: 17px}
</style>
