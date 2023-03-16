import BorderColorIcon from '@mui/icons-material/BorderColor';
import Modal from 'components/Modal/Modal';
import { CloseBtn, Icon } from 'components/Modal/Modal.styled';
import { useState } from 'react';
import {
  useEditContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';
import {
  Button,
  IconWrapper,
  Item,
  List,
  Title,
  Wrapper,
} from './FavoritesList.styled';

const FavoritesList = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data = [], isLoading } = useGetContactsQuery();
  const contacts = data.filter(contact => contact.favorite);
  const [toggleFavorite] = useEditContactMutation();

  return (
    <Wrapper component="div">
      {isLoading && <h2>loading...</h2>}

      <List>
        {contacts.map(({ name, phone, id, favorite }) => (
          <Item key={id}>
            <CloseBtn
              disabled={isLoading}
              onClick={() =>
                toggleFavorite({ id, name, phone, favorite: !favorite })
              }
            >
              <Icon />
            </CloseBtn>
            <Button
              disabled={isLoading}
              hover="yellow"
              onClick={() => setOpenModal(true)}
            >
              <BorderColorIcon sx={{ fontSize: 18 }} />
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
        ))}
      </List>
    </Wrapper>
  );
};

export default FavoritesList;
