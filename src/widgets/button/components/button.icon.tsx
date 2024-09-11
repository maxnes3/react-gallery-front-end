import { ButtonIconProps } from '../types/button.props';
import '../styles/_button.module.scss';

function ButtonIcon({
  imageUrl,
  radius,
  backgroundSize,
  iconSize,
  onClick,
}: ButtonIconProps) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`button-icon background-secondary border-${radius}`}
      aria-label="Description of the icon action"
      style={{ width: backgroundSize, height: backgroundSize }}
    >
      <svg
        className="icon color-primary-gray"
        style={{ width: iconSize.width, height: iconSize.height }}
      >
        <use href={`${imageUrl}#icon`} />
      </svg>
    </button>
  );
}

export default ButtonIcon;
