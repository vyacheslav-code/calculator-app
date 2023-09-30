import { useCalculatorContext } from '../context/CalculatorContext.tsx';

export function CalculatorDisplay() {
  const { display } = useCalculatorContext();
  return (
    <div className='p-6 pb-0 text-white space-y-4 md:space-y-6 sm:p-8'>
      <p className='w-full border-b border-gray-300 pb-6'>{display}</p>
    </div>
  );
}
