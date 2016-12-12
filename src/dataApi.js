let testData = {
  todoCards: [
    {
      cardId: 0,
      cardTitle: 'This is a card!',
      todoItems: [
        {
          todoId: 0,
          text: 'A card can have multiple todo-items',
          completed: false
        },
        {
          todoId: 1,
          text: 'Everything is auto saved to your disk',
          completed: true
        },
        {
          todoId: 2,
          text: 'Add a new item by pressing enter',
          completed: false
        }
      ]
    },
    {
      cardId: 1,
      cardTitle: 'This is another card!',
      todoItems: [
        {
          todoId: 0,
          text: 'Add cards by pressing the + below',
          completed: true
        },
        {
          todoId: 1,
          text: 'You can drag & rearrange cards',
          completed: true
        },
        {
          todoId: 2,
          text: 'Trying dragging my checkbox',
          completed: true
        }
      ]
    }
  ]
}

function readData () {
  return JSON.parse(window.localStorage.getItem('vueTodos'))
}

function writeData (data) {
  window.localStorage.setItem('vueTodos', JSON.stringify(data))
}

function writeTestData () {
  writeData(testData)
}

export default {readData, writeData, writeTestData}
