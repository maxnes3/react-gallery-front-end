import { FormEvent } from 'react';

export enum AngleRadius {
  rounded = 'rounded',
  circle = 'circle',
}

interface ButtonEvent {
  onClick: (e: FormEvent) => void;
}

export interface SizeParams {
  width: number;
  height: number;
}

export interface ButtonIconProps extends ButtonEvent {
  imageUrl: string;
  radius: AngleRadius;
  backgroundSize: number;
  iconSize: SizeParams;
}

export interface ButtonDefaultProps extends ButtonEvent {
  title: string;
}
