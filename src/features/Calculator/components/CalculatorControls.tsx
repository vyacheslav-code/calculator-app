import { CalculatorButton } from './CalculatorButton.tsx';
import { useCalculatorContext } from '../context/CalculatorContext.tsx';

export function CalculatorControls() {
  const { onButtonClick } = useCalculatorContext();
  return (
    <div className='grid grid-cols-3 gap-1 p-6 pt-0'>
      <div className='grid col-span-2 grid-cols-3 gap-1'>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '='].map((i) => {
          return <CalculatorButton value={i} onClick={() => onButtonClick(i)} />;
        })}
      </div>
      <div className='grid grid-cols-1 gap-1'>
        {['*', '/', '+', '-'].map((i) => {
          return <CalculatorButton value={i} onClick={() => onButtonClick(i)} />;
        })}
      </div>
    </div>
  );
}
