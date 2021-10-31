import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [
      {
        id: 0,
        title: 'Create TODO App',
        description: 'Create a SPA for DiscoverMyFranchise. dhjgkjkdghjkdfhgkjdfhgkdfhgjkfdhgjkdghkfjdhgjksdghlksfhgkdshglkshfglkdfhgksd',
        state: 'TODO',
        dueDate: 'Oct 31, 2021'
      }
    ],
    countId: 0
  },
  reducers: {
    add: (state, action) => {
      state.countId++;
      state.todoList.push({...action.payload, id: state.countId});
    },
    remove: (state, action) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
    },
    toggleState: (state, action) => {
      state.todoList.forEach((todo) => {
        if(todo.id === action.payload) {
          switch(todo.state) {
            case 'TODO': 
              todo.state = 'In Progress';
              break;
            case 'In Progress': 
              todo.state = 'Done'
              break;
            case 'Done': 
              todo.state = 'TODO'
              break;
          }
        }
      });
    },
    changeState: (state, action) => {
      state.todoList.at(action.payload.index).state = action.payload.state;
    },
    reorder: (state, action) => {
      const [removed] = state.todoList.splice(action.payload.startIndex, 1);
      state.todoList.splice(action.payload.endIndex, 0, removed);
    }
  },
})

export const { add, remove, toggleState, changeState, reorder } = todoSlice.actions

export default todoSlice.reducer