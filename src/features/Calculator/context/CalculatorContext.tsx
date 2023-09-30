import { createContext, ReactNode, useContext, useState } from 'react';

type CalculatorContextType = {
  display: string;
  onButtonClick: (i: string) => void;
  history: string[];
};

const CalculatorContext = createContext<CalculatorContextType | null>(null);
export const CalculatorProvider = ({ children }: { children: ReactNode }) => {
  const [display, setDisplay] = useState('0');
  const [history, setHistory] = useState<string[]>([]);
  const onButtonClick = (value: string) => {
    if (history.length > 20) {
      setHistory([...history.slice(1), value]);
    } else {
      setHistory([...history, value]);
    }
    if (value !== '=') {
      setDisplay(display + value);
      return;
    }

    const result = eval(display);
    setDisplay(result);
  };

  return (
    <CalculatorContext.Provider
      value={{
        display,
        onButtonClick,
        history,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculatorContext = () => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context as CalculatorContextType;
};
