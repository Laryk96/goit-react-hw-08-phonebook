import { IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ItemBar from 'components/ItemBar/ItemBar';
import Modal from 'components/Modal/Modal';
import useFavorites from 'hooks/useFavorites';

import {
  ContactItem,
  WrapperPhoneNumber,
  AvatarWrapper,
  StarIcon,
  Wrapper,
} from './ContactListItem.styled';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const { toggleAction, status } = useFavorites(id);

  const handleAddFavorites = e => {
    dispatch(toggleAction({ id, name, number }));
  };

  return (
    <>
      <ContactItem>
        {
          <Tooltip title={!status ? 'Add to favorites' : 'remove to favorites'}>
            <IconButton onClick={handleAddFavorites}>
              <StarIcon status={status ? 'true' : 'false'} />
            </IconButton>
          </Tooltip>
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
          <p>{number}</p>
        </WrapperPhoneNumber>
        <ItemBar id={id} isOpenModal={setOpenModal} />
      </ContactItem>
      {openModal && (
        <Modal id={id} name={name} number={number} onClose={setOpenModal} />
      )}
    </>
  );
};

export default ContactListItem;
