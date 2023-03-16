import MainLayout from 'MainLayout/MainLayout';
import ContactsPage from 'pages/ContactsPage';
import FavoritePage from 'pages/FavoritesPage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import { Route, Routes } from 'react-router-dom';

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
