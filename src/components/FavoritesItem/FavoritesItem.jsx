import { CircularProgress, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { CloseBtn, Icon } from 'components/Modal/Modal.styled';
import { Button, IconWrapper, Item, Title } from './FavoritesItem.styled';
import Modal from 'components/Modal/Modal';
import { useEditContactMutation } from 'redux/contactsSlice';
import { useState } from 'react';

const FavoritesItem = ({ id, name, phone, favorite }) => {
  const [toggleFavorite, { isLoading }] = useEditContactMutation();
  const [openModal, setOpenModal] = useState(false);
  return (
    <Item key={id}>
      <CloseBtn
        disabled={isLoading}
        onClick={() => toggleFavorite({ id, name, phone, favorite: !favorite })}
      >
        {isLoading ? (
          <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="secondary" size={20} />
          </Stack>
        ) : (
          <Icon />
        )}
      </CloseBtn>
      <Button
        disabled={isLoading}
        hover="yellow"
        onClick={() => setOpenModal(true)}
      >
        <EditIcon sx={{ fontSize: 20 }} />
      </Button>
      <IconWrapper>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
          alt="avatar"
          width={70}
        />
      </IconWrapper>
      <Title>{name}</Title>
      <p>{phone}</p>
      {openModal && (
        <Modal
          id={id}
          name={name}
          phone={phone}
          onClose={setOpenModal}
          favorite={favorite}
        />
      )}
    </Item>
  );
};

export default FavoritesItem;
