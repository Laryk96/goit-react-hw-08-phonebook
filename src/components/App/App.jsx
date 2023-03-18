import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from 'MainLayout/MainLayout';

const ContactsPage = lazy(() => import('pages/ContactsPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const FavoritePage = lazy(() => import('pages/FavoritesPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Route>
    </Routes>
  );
};

export default App;
