import BorderColorIcon from '@mui/icons-material/BorderColor';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { IconButton } from '@mui/material';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

import {
  useDeleteContactMutation,
  useEditContactMutation,
} from 'redux/contactsSlice';

import {
  Button,
  ContactItem,
  ContactName,
  Icons,
  StarIcon,
  Wrapper,
  WrapperIcon,
} from './ContactListItem.styled';

const ContactListItem = ({ id, name, phone, favorite }) => {
  const [openModal, setOpenModal] = useState(false);

  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [toggleFavorite] = useEditContactMutation();

  return (
    <>
      <ContactItem>
        {
          <IconButton
            disabled={isLoading}
            onClick={() =>
              toggleFavorite({ id, name, phone, favorite: !favorite })
            }
          >
            <StarIcon favorite={favorite} />
          </IconButton>
        }
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
        <p>{phone}</p>
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
        <Modal
          id={id}
          name={name}
          phone={phone}
          onClose={setOpenModal}
          favorite={favorite}
        />
      )}
    </>
  );
};

export default ContactListItem;
