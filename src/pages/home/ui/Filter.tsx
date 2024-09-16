import { useAppSelector } from '../../../app/store/reduxHooks';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../app/store/reduxHooks';

import { Link } from 'react-router-dom';

import { clearTodos } from '../../../features/todos';
import { currentTodos } from '../../../shared/lib';

export const Filter = () => {
  const todoLength = currentTodos(useAppSelector((state) => state.todo)).length;
  const dispatch = useAppDispatch();
  const { filter: filterPath = 'all' } = useParams();

  return (
    <div
      className={`theme-animation flex h-[4rem] w-full items-center justify-between rounded-b border-white-light bg-milk px-7 dark:border-gray-dark dark:bg-black-secondary ${todoLength < 6 ? 'border-t' : ''} max-phone:border-none max-phone:rounded`}
    >
      <span className="text-2">{todoLength} items left</span>
      <ul className="flex gap-[1.625rem]">
        <li>
          <Link to="all" className={`text-2 ${filterPath === 'all' ? 'text-pink' : ''}`}>
            All
          </Link>
        </li>
        <li>
          <Link to="active" className={`text-2 ${filterPath === 'active' ? 'text-pink' : ''}`}>
            Active
          </Link>
        </li>
        <li>
          <Link
            to="completed"
            className={`text-2 ${filterPath === 'completed' ? 'text-pink' : ''}`}
          >
            Completed
          </Link>
        </li>
      </ul>
      <button
        className="text-2"
        onClick={() => {
          dispatch(clearTodos());
        }}
      >
        Clear todos
      </button>
    </div>
  );
};
