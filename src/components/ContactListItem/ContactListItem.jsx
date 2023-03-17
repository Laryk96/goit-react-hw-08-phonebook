import { CircularProgress, IconButton, Stack } from '@mui/material';
import { useState } from 'react';

import ItemBar from 'components/ItemBar/ItemBar';
import Modal from 'components/Modal/Modal';

import { useEditContactMutation } from 'redux/contactsSlice';

import {
  ContactItem,
  WrapperPhoneNumber,
  AvatarWrapper,
  StarIcon,
  Wrapper,
} from './ContactListItem.styled';

const ContactListItem = ({ id, name, phone, favorite }) => {
  const [openModal, setOpenModal] = useState(false);
  const [toggleFavorite, { isLoading }] = useEditContactMutation();

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
            {isLoading ? (
              <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                <CircularProgress color="secondary" size={26} />
              </Stack>
            ) : (
              <StarIcon favorite={favorite ? 'true' : 'false'} />
            )}
          </IconButton>
        }
        <Wrapper>
          <AvatarWrapper>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
              alt="avatar"
              width={37}
            />
          </AvatarWrapper>
          <p>{name}</p>
        </Wrapper>
        <WrapperPhoneNumber>
          <p>{phone}</p>
        </WrapperPhoneNumber>
        <ItemBar id={id} isOpenModal={setOpenModal} />
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
