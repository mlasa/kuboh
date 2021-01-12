import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/index';
import Header from '../../components/Header';
import houseImage from '../../assets/my.svg';
import { Background, Container, Content, Sentence } from './styles';

const Landing: React.FC = () => (
  <>
    <Header>
      <Link to="h">Sobre</Link>
      <Link to="h">Contato</Link>
    </Header>
    <Content>
      <Container>
        <Sentence>Encontre ou compartilhe um lugar</Sentence>
        <Button>Cadastrar-se</Button>
        <Button>Entrar</Button>
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
