import { FormEvent } from 'react';

export enum AngleRadius {
  rounded = 'rounded',
  circle = 'circle',
}

export enum ButtonStatus {
  default = 'default',
  disable = 'disable',
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
  backgroundSize: number;
  iconSize: SizeParams;
  radius?: AngleRadius;
}

export interface ButtonDefaultProps extends ButtonEvent {
  title: string;
  status: ButtonStatus;
}
