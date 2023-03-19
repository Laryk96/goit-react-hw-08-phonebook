import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from 'MainLayout/MainLayout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operation';
import { useAuth } from 'hooks/useAuth';

const ContactsPage = lazy(() => import('pages/ContactsPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const FavoritePage = lazy(() => import('pages/FavoritesPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Route>
      </Routes>
    )
  );
};

export default App;
