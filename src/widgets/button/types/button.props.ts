import { FormEvent } from 'react';

export enum AngleRadius {
  rounded = 'rounded',
  circle = 'circle',
}

interface ButtonEvent {
  onClick: (e: FormEvent) => void;
}

export interface ButtonIconProps extends ButtonEvent {
  imageUrl: string;
  radius: AngleRadius;
}

export interface ButtonDefaultProps extends ButtonEvent {
  title: string;
}
