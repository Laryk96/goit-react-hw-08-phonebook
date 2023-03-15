import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './MainLayout.styled';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
