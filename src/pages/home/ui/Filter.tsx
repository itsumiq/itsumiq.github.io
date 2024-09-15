import { useAppSelector } from '../../../app/store/reduxHooks';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../app/store/reduxHooks';

import { Link } from 'react-router-dom';

import { clearTodos } from '../../../features/todos';
import { currentTodos } from '../../../shared/lib';

export const Filter = () => {
  const todoLength = currentTodos(useAppSelector((state) => state.todo)).length;
  const filterRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const { filter: filterPath = 'all' } = useParams();

  useEffect(() => {
    if (todoLength < 6 && filterRef.current) {
      filterRef.current.classList.add('filter');
    }

    return () => {
      filterRef.current?.classList.remove('filter');
    };
  }, [todoLength, filterPath]);

  return (
    <div
      className="theme-animation flex h-14 w-full items-center justify-between rounded-b bg-milk px-7 dark:bg-black-secondary"
      ref={filterRef}
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
