import { useAppSelector } from '../../app/store/reduxHooks';

import { Todo } from './Todo';

export const TodosList = () => {
  const todo = useAppSelector((state) => state.todo);

  return (
    <ul className="theme-animation grid h-[24.375rem] w-full auto-rows-[4rem] gap-y-px overflow-scroll rounded-t bg-milk dark:bg-black-secondary">
      {todo.map(({ id, status, title }) => (
        <li key={id}>
          <Todo title={title} />
          <div className="theme-animation h-px w-full bg-white-light dark:bg-gray-dark"></div>
        </li>
      ))}
    </ul>
  );
};
