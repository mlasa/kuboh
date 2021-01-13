import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Button from '../../components/Button/index';

import { Content, Container, Background } from './styles';
import login from '../../assets/login.svg';

const SignIn: React.FC = () => (
  <>
    <Header>
      <Link to="about">Sobre</Link>
    </Header>
    <Content>
      <Background>
        <img src={login} alt="" height={450} />
      </Background>
      <Container>
        <h1>Acesse sua conta</h1>
        <input type="email" name="email" id="email" placeholder="E-mail" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
        />
        <Button type="button"> Entrar</Button>
      </Container>
    </Content>
  </>
);
export default SignIn;
