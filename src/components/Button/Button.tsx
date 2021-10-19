import React from 'react';
import './button.css';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger' | 'success';
  backgroundColor?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
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
