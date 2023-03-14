import ContactForm from 'components/ContactForm';
import Contacts from 'components/Contacts/Contacts';

import { Container } from 'components/SignUp/SignUp.styled';

const ContactsPage = () => {
  return (
    <Container sx={{ justifyContent: 'space-around' }}>
      <ContactForm />
      <Contacts />
    </Container>
  );
};

export default ContactsPage;
