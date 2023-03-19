import { useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from 'redux/phonebook/favoritesSlice';
import { selectFavorites } from 'redux/phonebook/selectors';

const useFavorites = id => {
  const favorites = useSelector(selectFavorites);

  if (favorites.find(contact => contact.id === id)) {
    return { toggleAction: deleteFavorite, status: true };
  }

  return { toggleAction: addFavorite, status: false };
};

export default useFavorites;
