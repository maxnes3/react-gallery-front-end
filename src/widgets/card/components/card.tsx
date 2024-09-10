import { PaintingDto } from '../../../shared/painting';
import '../styles/_card.module.scss';

function Card({ image, title, year, artist, location }: PaintingDto) {
  const imageUrl = `data:image/jpeg;base64,${image}`;

  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="image" />
      <div className="interaction background-accent">
        <div className="subscription background-primary">
          <div className="block border-left">
            <div className="title color-primary-text">{title}</div>
            <div className="year color-accent">{year}</div>
          </div>
        </div>
        <img src="/arrow.icon.svg" alt="Arrow Icon" className="icon" />
      </div>
    </div>
  );
}

export default Card;
