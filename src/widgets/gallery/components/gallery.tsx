import { PaintingDto, usePaintings } from '../../../shared/painting';
import { Card } from '../../card';
import '../styles/_gallery.module.scss';

function Gallery() {
  const { data, error, isLoading } = usePaintings(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
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
