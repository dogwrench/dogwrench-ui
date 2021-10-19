import React, { InputHTMLAttributes } from 'react';
import { Size } from '../../types';
import './input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize: Size;
}

export const Input = ({ inputSize, ...args }: InputProps) => {
  const sizeStyle = `input-${inputSize}`;
  return <input className={`input ${sizeStyle}`} {...args} />;
};
