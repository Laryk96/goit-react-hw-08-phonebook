import { BsPersonSquare, BsPhoneFill } from 'react-icons/bs';

import contactsFiltration from 'services/contactsFiltration';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { ContactsList, Label, Wrapper } from './ContactList.styled';
import { selectFilter } from 'redux/phonebook/selectors';
import { useGetContactsQuery } from 'redux/phonebook/contactsSlice';
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
        {contacts.map(({ id, name, number, favorite }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            favorite={favorite}
          />
        ))}
      </ContactsList>
    </>
  );
};

export default ContactList;
