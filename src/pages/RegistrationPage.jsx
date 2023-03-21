import SignUp from 'components/SignUp/SignUp';
import { Container } from 'components/SignUp/SignUp.styled';

const RegistrationPage = () => {
  return (
    <section>
      <Container component="div">
        <SignUp />
      </Container>
    </section>
  );
};

export default RegistrationPage;
