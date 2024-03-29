import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProtectedRoutes from './pages/protectedRoutes/ProtectedRoutes';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/shop' element={<ProtectedRoutes/>}>
        <Route index element={<ShopPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
