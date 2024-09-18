import '../styles/_button.module.scss';
import { ButtonDefaultProps } from '../types/button.props';

function ButtonDefault({ title, status, onClick }: ButtonDefaultProps) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`button-default button-${status}`}
    >
      {title}
    </button>
  );
}

export default ButtonDefault;
