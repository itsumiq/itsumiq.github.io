import { useAppSelector, useAppDispatch } from '../../app/store/reduxHooks';
import { todoStatus, deleteTodo } from './todosSlice';

import { Checkbox } from '../../shared/ui';
import { DeleteTodo } from './DeleteTodo';
import { X } from 'lucide-react';

export const TodosList = () => {
  const todo = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  return (
    <ul className="theme-animation mt-[2.25rem] grid h-[24.375rem] w-full auto-rows-[4rem] gap-y-px overflow-scroll rounded-t bg-milk dark:bg-black-secondary">
      {todo.map(({ id, status, title }) => (
        <li key={id}>
          <div className="group flex h-full items-center justify-between px-7">
            <div className="flex gap-x-5">
              <Checkbox checked={status} id={id} onClick={() => dispatch(todoStatus(id))} />
              <label
                className={`text-1 cursor-point theme-textStatus ${status ? 'text-gray-light line-through dark:text-gray-primary' : 'no-underline'}`}
                htmlFor={id}
              >
                {title}
              </label>
            </div>
            <DeleteTodo
              onClick={() => dispatch(deleteTodo(id))}
              variant="group-hover:opacity-100 opacity-0 transition-all duration-700"
            >
              <X size="1.813rem" />
            </DeleteTodo>
          </div>
          <div className="theme-animation h-px w-full bg-white-light dark:bg-gray-dark"></div>
        </li>
      ))}
    </ul>
  );
};
