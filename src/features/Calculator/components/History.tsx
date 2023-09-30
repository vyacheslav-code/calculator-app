import { useCalculatorContext } from '../context/CalculatorContext.tsx';

export function History() {
  const { history } = useCalculatorContext();
  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <ol className='list-decimal list-inside px-6 py-8 md:h-screen lg:py-0 text-white'>
        {history.map((i: string) => {
          return <li>{i}</li>;
        })}
      </ol>
    </section>
  );
}
