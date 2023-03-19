import { Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteFavorite } from 'redux/phonebook/favoritesSlice.js';
import { CloseBtn, Icon } from 'components/Modal/Modal.styled';
import { Button, IconWrapper, Item, Title } from './FavoritesItem.styled';
import Modal from 'components/Modal/Modal';

const FavoritesItem = ({ id, name, number, favorite }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveFavorite = e => {
    dispatch(deleteFavorite(id));
  };

  return (
    <Item key={id}>
      <Tooltip title=" Remove from favorites">
        <CloseBtn onClick={handleRemoveFavorite}>
          <Icon />
        </CloseBtn>
      </Tooltip>
      <Tooltip title="Edit">
        <Button hover="yellow" onClick={() => setOpenModal(true)}>
          <EditIcon sx={{ fontSize: 20 }} />
        </Button>
      </Tooltip>
      <IconWrapper>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
          alt="avatar"
          width={70}
        />
      </IconWrapper>
      <Title>{name}</Title>
      <p>{number}</p>
      {openModal && (
        <Modal
          id={id}
          name={name}
          number={number}
          onClose={setOpenModal}
          favorite={favorite}
        />
      )}
    </Item>
  );
};

export default FavoritesItem;
