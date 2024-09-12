import { useState } from 'react';

import { addTodo } from './todosSlice';
import { useAppDispatch } from '../../app/store/store';

export const AddTodo = () => {
  const [currentValue, setCurrentValue] = useState('');
  const dispatch = useAppDispatch();

  return (
    <div className="relative w-full">
      <button
        className="dark:border-gray-primary border-gray-light hover:border-pink theme-animation absolute left-7 top-[1.125rem] size-7 rounded-full border"
        onClick={() => {
          dispatch(addTodo(currentValue));
        }}
      ></button>
      <input
        type="text"
        value={currentValue}
        className="dark:bg-black-secondary font-main bg-milk theme-animation h-16 w-full rounded pl-[4.75rem] text-lg font-normal outline-none"
        onChange={(e) => setCurrentValue(e.target.value)}
        placeholder="Type your todo"
      />
    </div>
  );
};
