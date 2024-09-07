import { ButtonIconProps } from '../types/button.types';
import '../styles/_button.module.scss';

function ButtonIcon({ imageUrl, radius, onClick }: ButtonIconProps) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`button-icon border-${radius}`}
    >
      <img src={imageUrl} alt="icon" />
    </button>
  );
}

export default ButtonIcon;
