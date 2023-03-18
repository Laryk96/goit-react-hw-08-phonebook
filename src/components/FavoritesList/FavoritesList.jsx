import { useSelector } from 'react-redux';
import FavoritesItem from 'components/FavoritesItem/FavoritesItem';
import { List, Wrapper } from './FavoritesList.styled';
import {
  selectFavorites,
  selectorFavoritesContact,
} from 'redux/phonebook/selectors';

const FavoritesList = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <Wrapper component="div">
      <List>
        {favorites.map(({ name, phone, id }) => (
          <FavoritesItem key={id} name={name} phone={phone} id={id} />
        ))}
      </List>
    </Wrapper>
  );
};

export default FavoritesList;
// const { data = [], isLoading } = useGetContactsQuery();
// const favoritesId = useSelector(selectFavorites);
// const contacts = data.reduce((acc, contact) => {
//   favoritesId.includes(contact.id) && acc.push(contact);
//   return acc;
// }, []);
