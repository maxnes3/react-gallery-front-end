import { ChangeEvent } from 'react';

interface InputProps {
  imageUrl?: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default InputProps;
