import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import { Container } from './MainLayout.styled';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default MainLayout;
