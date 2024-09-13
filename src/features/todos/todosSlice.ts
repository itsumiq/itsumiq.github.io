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
  },
});

export const { addTodo } = todosSlice.actions;
export const todoReducer = todosSlice.reducer;
