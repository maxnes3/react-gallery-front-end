import '../styles/_button.module.scss';
import { ButtonDefaultProps } from '../types/button.types';

function ButtonDefault({ title, onClick }: ButtonDefaultProps) {
  return (
    <button type="submit" onClick={onClick} className="button-default">
      {title}
    </button>
  );
}

export default ButtonDefault;
