import ContactForm from 'components/ContactForm';
import Contacts from 'components/Contacts/Contacts';

import { Container } from 'components/SignUp/SignUp.styled';
import { SEO } from 'services/SEO';

const ContactsPage = () => {
  return (
    <section>
      <SEO title="Contacts" description="You can create your contacts list" />
      <Container sx={{ justifyContent: 'space-around' }}>
        <ContactForm />
        <Contacts />
      </Container>
    </section>
  );
};

export default ContactsPage;
