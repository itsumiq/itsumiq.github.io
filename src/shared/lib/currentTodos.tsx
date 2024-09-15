import { TodoState } from '../types';
import { useParams } from 'react-router-dom';

export const currentTodos = (todos: TodoState[]) => {
  const { filter: filterPath } = useParams();

  if (filterPath === 'active') {
    return todos.filter(({ status }) => status === false);
  } else if (filterPath === 'completed') {
    return todos.filter(({ status }) => status === true);
  }

  return todos;
};
