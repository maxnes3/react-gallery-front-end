import { ButtonIcon, AngleRadius } from '../../button';
import '../styles/_header.module.scss';

function Header() {
  return (
    <div className="header">
      <img src="/logo.dark.svg" alt="logo" />
      <ButtonIcon
        imageUrl="/dark/switch.icon.svg"
        radius={AngleRadius.circle}
      />
    </div>
  );
}

export default Header;
