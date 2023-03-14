import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Form as Container } from 'components/SignUp/SignUp.styled';

const Contacts = () => {
  return (
    <Container component="div" sx={{ width: '40%' }}>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default Contacts;
