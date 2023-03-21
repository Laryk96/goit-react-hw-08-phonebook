import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import { Container } from './MainLayout.styled';

const MainLayout = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </Suspense>
  );
};

export default MainLayout;
