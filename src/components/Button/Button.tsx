import React, { ButtonHTMLAttributes } from 'react';
import { Size } from '../../types';
import './button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'danger' | 'success';
  backgroundColor?: string;
  size?: Size;
  label: string;
}

export const Button = ({
  variant,
  backgroundColor,
  size,
  label,
}: ButtonProps) => {
  const btnVariant = `button-${variant}`;
  const btnSize = `button-${size}`;
  return (
    <button type="button" className={`button ${btnVariant} ${btnSize}`}>
      {label}
    </button>
  );
};
