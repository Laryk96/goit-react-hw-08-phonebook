import SignUp from 'components/SignUp/SignUp';
import { Container } from 'components/SignUp/SignUp.styled';
import { SEO } from 'services/SEO';

const RegistrationPage = () => {
  return (
    <section>
      <SEO
        title="Registration"
        description="You can register using your email"
      />
      <Container component="div">
        <SignUp />
      </Container>
    </section>
  );
};

export default RegistrationPage;
