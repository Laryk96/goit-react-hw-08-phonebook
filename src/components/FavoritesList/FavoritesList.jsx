import { useSelector } from 'react-redux';
import FavoritesItem from 'components/FavoritesItem/FavoritesItem';
import { List, Wrapper } from './FavoritesList.styled';
import { selectFavorites } from 'redux/phonebook/selectors';

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
