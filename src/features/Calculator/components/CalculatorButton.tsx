import { MouseEventHandler } from 'react';

type Props = {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
export function CalculatorButton({ value, onClick }: Props) {
  return (
    <div className={`${value === '=' ? 'col-span-2' : ''}`}>
      {' '}
      <button
        onClick={onClick}
        className={` ${
          value === '=' ? 'w-1/2 ml-[50%]' : 'w-full'
        }   text-black bg-primary-100 hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center dark:bg-primary-50 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
      >
        {value}
      </button>{' '}
    </div>
  );
}
