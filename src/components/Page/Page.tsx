import React, { FC } from 'react';
import './Page.scss';

interface PageProps {}

export const Page: FC<PageProps> = ({ children }) => {
  return <div className="page">{children}</div>;
};
