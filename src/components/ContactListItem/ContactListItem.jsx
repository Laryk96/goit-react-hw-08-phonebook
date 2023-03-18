import { IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ItemBar from 'components/ItemBar/ItemBar';
import Modal from 'components/Modal/Modal';
import useFavorites from 'redux/hooks/useFavorites';

import {
  ContactItem,
  WrapperPhoneNumber,
  AvatarWrapper,
  StarIcon,
  Wrapper,
} from './ContactListItem.styled';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const { toggleAction, status } = useFavorites(id);

  const handleAddFavorites = e => {
    dispatch(toggleAction({ id, name, phone }));
  };
  return (
    <>
      <ContactItem>
        {
          <Tooltip title="Add to favorites ">
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
          <p>{phone}</p>
        </WrapperPhoneNumber>
        <ItemBar id={id} isOpenModal={setOpenModal} />
      </ContactItem>
      {openModal && (
        <Modal id={id} name={name} phone={phone} onClose={setOpenModal} />
      )}
    </>
  );
};

export default ContactListItem;
