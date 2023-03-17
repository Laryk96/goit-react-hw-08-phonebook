import FavoritesItem from 'components/FavoritesItem/FavoritesItem';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { List, Wrapper } from './FavoritesList.styled';

const FavoritesList = () => {
  const { data = [], isLoading } = useGetContactsQuery();
  const contacts = data.filter(contact => contact.favorite);

  return (
    <Wrapper component="div">
      {isLoading && <h2>loading...</h2>}

      <List>
        {contacts.map(({ name, phone, id, favorite }) => (
          <FavoritesItem
            key={id}
            name={name}
            phone={phone}
            id={id}
            favorite={favorite}
          />
        ))}
      </List>
    </Wrapper>
  );
};

export default FavoritesList;
