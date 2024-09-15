import { useState } from 'react';

import { addTodo } from './todosSlice';
import { useAppDispatch } from '../../app/store/reduxHooks';

export const AddTodo = () => {
  const [currentValue, setCurrentValue] = useState('');
  const dispatch = useAppDispatch();

  const handleActionAdd = () => {
    dispatch(addTodo(currentValue));
    setCurrentValue('');
  };

  return (
    <div className="relative w-full">
      <button
        className="theme-animation absolute left-7 top-[1.125rem] size-7 rounded-full border border-gray-light hover:border-pink dark:border-gray-primary"
        onClick={handleActionAdd}
      ></button>
      <input
        type="text"
        value={currentValue}
        className="theme-animation text-1 h-16 w-full rounded bg-milk pl-[4.75rem] font-main outline-none dark:bg-black-secondary"
        onChange={(e) => setCurrentValue(e.target.value)}
        placeholder="Type your todo"
        onKeyDown={(e) => {
          if (e.code === 'Enter') {
            handleActionAdd();
          }
        }}
      />
    </div>
  );
};
