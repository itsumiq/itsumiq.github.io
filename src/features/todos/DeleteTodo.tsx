import React from 'react';

interface DeleteTodoProps {
  children: React.ReactNode;
  onClick: () => void;
  variant: string;
}

export const DeleteTodo = ({ children, onClick, variant }: DeleteTodoProps) => {
  return (
    <button
      onClick={onClick}
      className={`text-gray-light hover:text-black-primary dark:text-gray-primary dark:hover:text-white ${variant}`}
    >
      {children}
    </button>
  );
};
