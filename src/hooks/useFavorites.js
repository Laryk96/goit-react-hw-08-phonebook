const { useSelector } = require('react-redux');
const {
  deleteFavorite,
  addFavorite,
} = require('redux/phonebook/favoritesSlice');
const { selectFavorites } = require('redux/phonebook/selectors');

const useFavorites = id => {
  const favorites = useSelector(selectFavorites);

  if (favorites.find(contact => contact.id === id)) {
    return { toggleAction: deleteFavorite, status: true };
  }

  return { toggleAction: addFavorite, status: false };
};

export default useFavorites;
