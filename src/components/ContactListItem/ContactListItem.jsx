import BorderColorIcon from '@mui/icons-material/BorderColor';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

import { useDeleteContactMutation } from 'redux/contactsSlice';
import {
  Button,
  ContactItem,
  ContactName,
  Icons,
  Wrapper,
  WrapperIcon,
} from './ContactListItem.styled';

const ContactListItem = ({ id, name, phone }) => {
  const [openModal, setOpenModal] = useState(false);

  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <ContactItem>
        <Wrapper>
          <Icons>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
              alt="avatar"
              width={35}
            />
          </Icons>
          <ContactName>{name}</ContactName>
        </Wrapper>
        <span>{phone}</span>
        <WrapperIcon>
          <Button hover="yellow" onClick={() => setOpenModal(true)}>
            <BorderColorIcon />
          </Button>
          <Button
            hover="red"
            aria-label="Delete"
            disabled={isLoading}
            onClick={() => deleteContact(id)}
          >
            <PersonRemoveIcon />
          </Button>
        </WrapperIcon>
      </ContactItem>
      {openModal && (
        <Modal id={id} name={name} phone={phone} onClose={setOpenModal} />
      )}
    </>
  );
};

export default ContactListItem;
