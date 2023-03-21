import LogIn from 'components/logIn/Login';
import { Container } from 'components/SignUp/SignUp.styled';
import { SEO } from 'services/SEO';

const LoginPage = () => {
  return (
    <section>
      <SEO title="Login" description="You can login to your account" />
      <Container component="div">
        <LogIn />
      </Container>
    </section>
  );
};

export default LoginPage;
