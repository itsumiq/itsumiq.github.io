import { Checkbox } from '../../shared/ui';

interface TodoProps {
  title: string;
}

export const Todo = ({ title }: TodoProps) => {
  return (
    <div className="flex h-full items-center">
      <Checkbox />
      <span className="text-1">{title}</span>
    </div>
  );
};
