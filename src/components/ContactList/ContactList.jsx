import { BsPersonSquare, BsPhoneFill } from 'react-icons/bs';

import contactsFiltration from 'services/contactsFiltration';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { ContactsList, Label, Wrapper } from './ContactList.styled';
import { selectFilter } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const { data, error, isLoading } = useGetContactsQuery();
  const contacts = contactsFiltration(data, filter);

  return (
    <>
      {!isLoading && !error ? (
        <Label>
          <Wrapper>
            <i>
              <BsPersonSquare />
            </i>
            <span>Name:</span>
          </Wrapper>
          <Wrapper>
            <i>
              <i>
                <BsPhoneFill />
              </i>
            </i>
            <span>Tell:</span>
          </Wrapper>
        </Label>
      ) : (
        <h2 style={{ textAlign: 'center' }}>loading...</h2>
      )}
      <ContactsList>
        {!isLoading &&
          !error &&
          contacts.map(({ id, name, phone }) => (
            <ContactListItem key={id} id={id} name={name} phone={phone} />
          ))}
      </ContactsList>
    </>
  );
};

export default ContactList;
