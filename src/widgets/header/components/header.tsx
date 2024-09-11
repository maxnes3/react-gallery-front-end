import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonIcon, AngleRadius, SizeParams } from '../../button';
import { switchTheme, ThemeStateType } from '../../../shared/theme';
import '../styles/_header.module.scss';

function Header() {
  const iconSize: SizeParams = { width: 20, height: 20 };
  const dispatch = useDispatch();
  const theme = useSelector((state: ThemeStateType) => state.theme.theme);

  const toggleTheme = (event: FormEvent) => {
    event.preventDefault();
    dispatch(switchTheme());
  };

  return (
    <div className="header">
      <svg className="color-primary-gray">
        <use href="/logo.icon.svg#icon" />
      </svg>
      <ButtonIcon
        imageUrl={`/${theme}/switch.icon.svg`}
        radius={AngleRadius.circle}
        onClick={toggleTheme}
        backgroundSize={40}
        iconSize={iconSize}
      />
    </div>
  );
}

export default Header;
