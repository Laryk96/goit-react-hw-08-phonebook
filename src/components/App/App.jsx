import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import MainLayout from 'MainLayout/MainLayout';
import { refreshUser } from 'redux/auth/operation';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from 'routes/RestrictedRooute';
import { PrivateRoute } from 'routes/ProvateRoute';
import { routsPath, redirectPath } from 'path/routs.js';

const ContactsPage = lazy(() => import('pages/ContactsPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const FavoritePage = lazy(() => import('pages/FavoritesPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));

const { home, logIn, signUp, contacts, favorites } = routsPath;
const { toLogIn, toContacts } = redirectPath;

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <HelmetProvider>
        <Routes>
          <Route path={home} element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path={signUp}
              element={
                <RestrictedRoute
                  component={RegistrationPage}
                  redirectTo={toContacts}
                />
              }
            />
            <Route
              path={logIn}
              element={
                <RestrictedRoute
                  component={LoginPage}
                  redirectTo={toContacts}
                />
              }
            />
            <Route
              path={contacts}
              element={
                <PrivateRoute component={ContactsPage} redirectTo={toLogIn} />
              }
            />
            <Route
              path={favorites}
              element={
                <PrivateRoute component={FavoritePage} redirectTo={toLogIn} />
              }
            />
          </Route>
        </Routes>
      </HelmetProvider>
    )
  );
};

export default App;
