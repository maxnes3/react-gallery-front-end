import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonIcon, AngleRadius } from '../../button';
import '../styles/_header.module.scss';
import { switchTheme, ThemeStateType } from '../../../shared/theme';

function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state: ThemeStateType) => state.theme.theme);

  const toggleTheme = (event: FormEvent) => {
    event.preventDefault();
    dispatch(switchTheme());
  };

  return (
    <div className="header">
      <img src="/logo.dark.svg" alt="logo" />
      <ButtonIcon
        imageUrl={`/${theme}/switch.icon.svg`}
        radius={AngleRadius.circle}
        onClick={toggleTheme}
      />
    </div>
  );
}

export default Header;
