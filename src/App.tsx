import { LoginProvider } from './features/Login/context/LoginContext.tsx';
import { CalculatorProvider } from './features/Calculator/context/CalculatorContext.tsx';
import { Router } from './router.tsx';

function App() {
  return (
    <LoginProvider>
      <CalculatorProvider>
        <Router />
      </CalculatorProvider>
    </LoginProvider>
  );
}

export default App;
