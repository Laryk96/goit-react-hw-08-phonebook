import { BsPersonSquare, BsPhoneFill } from 'react-icons/bs';

import contactsFiltration from 'services/contactsFiltration';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { ContactsList, Label, Wrapper } from './ContactList.styled';
import { selectFilter } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const { data, isLoading } = useGetContactsQuery();
  const contacts = contactsFiltration(data, filter);
  if (isLoading) {
    return <h2 style={{ textAlign: 'center' }}>loading...</h2>;
  }
  return (
    <>
      {isLoading && <h2>loading...</h2>}
      <Label>
        <Wrapper>
          <i>
            <BsPersonSquare />
          </i>
          <span>Name:</span>
        </Wrapper>
        <Wrapper>
          <i>
            <BsPhoneFill />
          </i>
          <span>Phone:</span>
        </Wrapper>
      </Label>
      <ContactsList>
        {contacts.map(({ id, name, phone, favorite }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            phone={phone}
            favorite={favorite}
          />
        ))}
      </ContactsList>
    </>
  );
};

export default ContactList;
