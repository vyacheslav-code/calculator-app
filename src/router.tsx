import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderLayout } from './layouts/HeaderLayout.tsx';
import { LoginForm } from './features/Login/components/LoginForm.tsx';
import { Calculator } from './features/Calculator/components/Calculator.tsx';
import { History } from './features/Calculator/components/History.tsx';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/app/' element={<HeaderLayout />}>
          <Route path='calculator' element={<Calculator />} />
          <Route path='history' element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
