import React, { FC } from 'react';
import './Page.scss';

export const Page: FC = ({ children }) => {
  return <div className="page">{children}</div>;
};
