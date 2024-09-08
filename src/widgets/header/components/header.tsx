import { FormEvent } from 'react';
import { ButtonIcon, AngleRadius } from '../../button';
import '../styles/_header.module.scss';

function Header() {
  const toggleTheme = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="header">
      <img src="/logo.dark.svg" alt="logo" />
      <ButtonIcon
        imageUrl="/dark/switch.icon.svg"
        radius={AngleRadius.circle}
        onClick={toggleTheme}
      />
    </div>
  );
}

export default Header;
