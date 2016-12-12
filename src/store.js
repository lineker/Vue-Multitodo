import Vue from 'vue'
import Vuex from 'vuex'
import dataApi from './dataApi'

function swapElement (array, indexA, indexB) {
  let tmp = array[indexA]
  array[indexA] = array[indexB]
  array[indexB] = tmp
}

const localStoragePlugin = store => {
  store.subscribe((mutation, state) => {
    dataApi.writeData(state)
    // called after every mutation.
    // The mutation comes in the format of { type, payload }.
  })
}

if (dataApi.readData() === null) {
  dataApi.writeTestData()
}

const obtainInitialData = dataApi.readData().todoCards

Vue.use(Vuex)
/* eslint-disable eqeqeq */
const store = new Vuex.Store({
  state: {
    todoCards: obtainInitialData
  },
  mutations: {
    addTodoCard (state) {
      state.todoCards.push({ cardId: Math.max(1, ...state.todoCards.map((c) => c.cardId)) + 1, cardTitle: 'Card', todoItems: [{ todoId: 0, text: 'To-do Item (⏎ to create another)', completed: false }] })
    },
    editTodoCardTitle (state, { cardId, title }) {
      state.todoCards.filter((c) => c.cardId == cardId)[0].cardTitle = title
    },
    deleteTodoCard (state, { cardId }) {
      state.todoCards = state.todoCards.filter((c) => c.cardId != cardId)
    },
    reorderTodoCard (state, { oldIdx, newIdx }) {
      swapElement(state.todoCards, oldIdx, newIdx)
    },
    addTodoItem (state, { cardId, text }) {
      state.todoCards.filter((c) => c.cardId == cardId)[0].todoItems.push({ todoId: Math.max(1, ...state.todoCards.filter((c) => c.cardId == cardId)[0].todoItems.map((c) => c.todoId)) + 1, text: text, completed: false })
    },
    editTodoItemText (state, { cardId, todoId, text }) {
      state.todoCards.filter((c) => c.cardId == cardId)[0].todoItems.filter((ti) => ti.todoId == todoId)[0].text = text
    },
    editTodoItemCompletion (state, { cardId, todoId, completion }) {
      state.todoCards.filter((c) => c.cardId == cardId)[0].todoItems.filter((ti) => ti.todoId == todoId)[0].completed = completion
    },
    deleteTodoItem (state, { cardId, todoId }) {
      state.todoCards.filter((c) => c.cardId == cardId)[0].todoItems = state.todoCards.filter((c) => c.cardId == cardId)[0].todoItems.filter((ti) => ti.todoId != todoId)
    },
    reorderTodoItem (state, { cardId, oldIdx, newIdx }) {
      swapElement(state.todoCards.filter((c) => c.cardId == cardId)[0].todoItems, oldIdx, newIdx)
    }
  },
  plugins: [localStoragePlugin]
})

export default store
// store.commit({ type: 'addTodoItem', cardId: 0, contents: { text: 'hello', completed: true } })
