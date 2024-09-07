import { PaintingDto } from '../../../shared/painting';
import '../styles/_card.module.scss';

function Card({ image, title, year, artist, location }: PaintingDto) {
  const imageUrl = `data:image/jpeg;base64,${image}`;

  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="subscription">
        <div className="title">{title}</div>
        <div className="year">{year}</div>
      </div>
    </div>
  );
}

export default Card;
