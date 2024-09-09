import { useSelector } from 'react-redux';
import {
  PageStateType,
  PaintingDto,
  usePaintings,
} from '../../../shared/painting';
import { Card } from '../../card';
import '../styles/_gallery.module.scss';

function Gallery() {
  const currentPage = useSelector((state: PageStateType) => state.page.current);
  const { data, isLoading } = usePaintings(currentPage);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gallery">
      {data?.map((painting: PaintingDto) => (
        <Card
          key={painting.id}
          image={painting.image}
          title={painting.title}
          year={painting.year}
          artist={painting.artist}
          location={painting.location}
        />
      ))}
    </div>
  );
}

export default Gallery;
