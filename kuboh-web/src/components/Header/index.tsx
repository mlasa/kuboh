import React from 'react';

import { ContainerHeader } from './styles';

const Header: React.FC = ({ children }) => (
  <ContainerHeader>
    <h2>Kuboh</h2>
    <div>{children}</div>
  </ContainerHeader>
);
export default Header;
