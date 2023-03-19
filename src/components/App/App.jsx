import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from 'MainLayout/MainLayout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operation';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from 'routes/RestrictedRooute';
import { PrivateRoute } from 'routes/ProvateRoute';

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
          <Route
            path="/registration"
            element={
              <RestrictedRoute
                component={RegistrationPage}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivateRoute component={FavoritePage} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    )
  );
};

export default App;
