import { ChangeEvent, useState } from 'react';
import InputProps from '../types/input.props';
import '../styles/_input.module.scss';

function Input({ imageUrl, placeholder, value, onChange }: InputProps) {
  const [showClear, setShowClear] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setShowClear(e.target.value.length > 0);
  };

  const handleClear = () => {
    const event = {
      target: {
        value: '',
      },
    };
    onChange(event as ChangeEvent<HTMLInputElement>);
    setShowClear(false);
  };

  return (
    <div className="field background-secondary outline-focus border-rounded">
      {imageUrl && (
        <svg className="icon color-primary-gray">
          <use href={`${imageUrl}#icon`} />
        </svg>
      )}
      <input
        className="input color-primary-text"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {imageUrl && showClear && (
        <button type="button" className="cross" onClick={handleClear}>
          {/* <img src="/cross.small.icon.svg" alt="cross" /> */}
          <svg className="color-primary-gray">
            <use href="/cross.small.icon.svg#icon" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Input;
