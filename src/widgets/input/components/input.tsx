import InputProps from '../types/input.types';
import '../styles/_input.module.scss';

function Input({ imageUrl, placeholder, value, onChange }: InputProps) {
  return (
    <div className="field border-rounded">
      {imageUrl && <img src={imageUrl} alt="icon" />}
      <input
        className="input-field"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
