import { createSlice, current } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [
      {
        state: 'TODO',
        color: 'danger',
        todos: [
          {
            id: '1',
            title: 'Create TODO App',
            description: 'Create a SPA for DiscoverMyFranchise.',
            dueDate: '2021-10-31'
          },
          {
            id: '2',
            title: 'Shopping',
            description: 'Drive to Nesters to buy food.',
            dueDate: '2021-11-5'
          },
        ]
      },
      {
        state: 'In Progress',
        color: 'warning',
        todos: [
          {
            id: '3',
            title: 'Improve TODO App',
            description: 'Create a SPA for DiscoverMyFranchise.',
            dueDate: '2021-10-31'
          },
        ]
      },
      {
        state: 'Done',
        color: 'success',
        todos: [
          {
            id: '4',
            title: 'Done TODO App',
            description: 'Create a SPA for DiscoverMyFranchise.',
            dueDate: '2021-10-31'
          }
        ]
      },
    ],
    countId: 4
  },
  reducers: {
    add: (state, action) => {
      state.countId++;
      state.todoList[action.payload.stateIndex].todos.push({...action.payload.todo, id: '' + state.countId});
      state.todoList[action.payload.stateIndex]['sortLabel'] = undefined;
    },
    remove: (state, action) => {
      state.todoList[action.payload.stateIndex].todos.splice(action.payload.index, 1);
    },
    changeState: (state, action) => {
      const [removed] = state.todoList[parseInt(action.payload.sourceStateIndex)].todos.splice(action.payload.sourceIndex, 1);
      state.todoList[parseInt(action.payload.destStateIndex)].todos.splice(action.payload.destIndex, 0, current(removed));
      state.todoList[action.payload.destStateIndex]['sortLabel'] = undefined;
    },
    reorderTodo: (state, action) => {
      const [removed] = state.todoList[parseInt(action.payload.stateIndex)].todos.splice(action.payload.sourceIndex, 1);
      state.todoList[parseInt(action.payload.stateIndex)].todos.splice(action.payload.destIndex, 0, current(removed));
      state.todoList[action.payload.stateIndex]['sortLabel'] = undefined;
    },
    reorderTable: (state, action) => {
      const [removed] = state.todoList.splice(action.payload.sourceIndex, 1);
      state.todoList.splice(action.payload.destIndex, 0, current(removed));
    },
    edit: (state, action) => {
      state.todoList[action.payload.stateIndex].todos[action.payload.index] = action.payload.todo;
      state.todoList[action.payload.stateIndex]['sortLabel'] = undefined;
    },
    sort: (state, action) => {
      state.todoList[action.payload.index].todos.sort(action.payload.func)
      state.todoList[action.payload.index]['sortLabel'] = action.payload.sortLabel;
    }
  },
})

export const { add, remove, toggleState, changeState, reorderTodo, reorderTable, edit, sort} = todoSlice.actions

export default todoSlice.reducer