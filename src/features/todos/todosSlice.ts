import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { TodoState } from '../../shared/types';

const initialState: TodoState[] = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<TodoState>) => {
        state.push(action.payload);
      },
      prepare: (title: string) => ({
        payload: {
          title,
          id: nanoid(),
          status: false,
        },
      }),
    },
    todoStatus: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.status = !todo.status;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const deleteId = action.payload;
      const todo = state.filter(({ id }) => id !== deleteId);

      state = todo;

      return state;
    },
    clearTodos: (state) => {
      state = [];

      return state;
    },
  },
});

export const { addTodo, todoStatus, deleteTodo, clearTodos } = todosSlice.actions;
export const todoReducer = todosSlice.reducer;
