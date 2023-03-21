import FavoritesList from 'components/FavoritesList/FavoritesList';
import { SEO } from 'services/SEO';

const FavoritePage = () => {
  return (
    <section>
      <SEO title="Favorites" description="Your favorite contacts" />
      <FavoritesList />
    </section>
  );
};

export default FavoritePage;
