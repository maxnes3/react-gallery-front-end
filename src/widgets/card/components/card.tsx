import { PaintingDto } from '../../../shared/painting';
import '../styles/_card.module.scss';

function Card({ image, title, year, artist, location }: PaintingDto) {
  const imageUrl = `data:image/jpeg;base64,${image}`;

  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="image" />
      <div className="interaction">
        <div className="subscription">
          <div className="title">{title}</div>
          <div className="year">{year}</div>
        </div>
        <img src="/arrow.icon.svg" alt="Arrow Icon" className="icon" />
      </div>
    </div>
  );
}

export default Card;
