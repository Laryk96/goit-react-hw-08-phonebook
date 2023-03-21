import LogIn from 'components/logIn/Login';
import { Container } from 'components/SignUp/SignUp.styled';

const LoginPage = () => {
  return (
    <section>
      <Container component="div">
        <LogIn />
      </Container>
    </section>
  );
};

export default LoginPage;
