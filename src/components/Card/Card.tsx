import React, { FC } from 'react';
import './Card.scss';

interface CardProps {}

export const Card: FC<CardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};
