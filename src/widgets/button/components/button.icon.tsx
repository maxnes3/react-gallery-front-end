import { ButtonIconProps } from '../types/button.props';
import '../styles/_button.module.scss';

function ButtonIcon({
  imageUrl,
  backgroundSize,
  iconSize,
  onClick,
  radius,
}: ButtonIconProps) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`button-icon ${radius ? `background-secondary border-${radius}` : 'background-none'}`}
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
