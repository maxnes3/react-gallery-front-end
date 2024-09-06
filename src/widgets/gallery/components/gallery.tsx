import { useQuery } from '@tanstack/react-query';
import { PaintingDto, paintingService } from '../../../shared/painting';
import { Card } from '../../card';

function Gallery() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['paintings'],
    queryFn: paintingService.getAll,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid">
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
