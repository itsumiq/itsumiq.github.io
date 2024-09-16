import { Check } from 'lucide-react';

interface CheckboxProps {
  checked: boolean;
  onClick: () => void;
  id: string;
}

export const Checkbox = ({ checked, onClick, id }: CheckboxProps) => {
  return (
    <div className="relative flex items-center">
      <Check
        size="1rem"
        className={`absolute left-[0.375rem] top-[0.375rem] ${checked ? 'block' : 'hidden'} cursor-pointer text-white transition-all duration-700`}
        id={id}
        onClick={onClick}
      />
      <input
        type="checkbox"
        checked={checked}
        onChange={onClick}
        id={id}
        className="checkbox checkbox-checked cursor-pointer"
      />
    </div>
  );
};
