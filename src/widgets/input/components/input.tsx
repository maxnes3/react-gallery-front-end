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
    <div className="field background-secondary border-rounded">
      {imageUrl && <img src={imageUrl} alt="icon" className="icon" />}
      <input
        className="input color-primary-text"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {imageUrl && showClear && (
        <button type="button" className="cross" onClick={handleClear}>
          <img src="/cross.small.icon.svg" alt="cross" />
        </button>
      )}
    </div>
  );
}

export default Input;
