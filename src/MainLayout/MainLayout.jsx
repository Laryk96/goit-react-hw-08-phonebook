import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container, Wrapper } from './MainLayout.styled';

const MainLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  );
};

export default MainLayout;
