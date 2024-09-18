import { FormEvent, useState } from 'react';
import { ButtonIcon } from '../../button';
import SelectProps from '../types/select.type';

function Select({ title }: SelectProps) {
  const [visibleState, setVisibleState] = useState(false);

  const toggleSelector = (event: FormEvent) => {
    event.preventDefault();
    setVisibleState(!visibleState);
  };

  return (
    <div className="select">
      <div className="interaction">
        <div className="title color-primary-text">{title}</div>
        <ButtonIcon
          imageUrl={
            visibleState ? '/minus.default.icon.svg' : '/plus.default.icon.svg'
          }
          backgroundSize={40}
          iconSize={
            visibleState ? { width: 16, height: 2 } : { width: 16, height: 16 }
          }
          onClick={toggleSelector}
        />
      </div>
      {visibleState && <div className="collapse" />}
    </div>
  );
}

export default Select;
