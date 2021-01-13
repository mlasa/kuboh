import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/index';
import Header from '../../components/Header';
import houseImage from '../../assets/my.svg';
import { Background, Container, Content, Sentence } from './styles';

const Landing: React.FC = () => (
  <>
    <Header>
      <Link to="about">Sobre</Link>
    </Header>
    <Content>
      <Container>
        <Sentence>Encontre ou compartilhe um lugar</Sentence>
        <Button>Cadastrar-se</Button>
        <Link to="signin">
          <Button>Entrar</Button>
        </Link>
      </Container>
      <Background>
        <img
          src={houseImage}
          height={500}
          alt="desenho de uma foto de uma casa"
        />
      </Background>
    </Content>
  </>
);

export default Landing;
