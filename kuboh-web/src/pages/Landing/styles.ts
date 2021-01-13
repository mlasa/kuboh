import styled from 'styled-components';
import { shade } from 'polished';

export const Background = styled.div`
  flex: 1;
  img {
    align-self: auto;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  min-width: 700px;
  padding: 20px;
  justify-content: center;
  align-items: center;

  button {
    background: #4abdac;

    &:hover {
      background-color: ${shade(0.2, '#4ABDAC')};
    }
  }
  a {
    button {
      background: #dfdce3;
      &:hover {
        background: ${shade(0.2, '#dfdce3')};
      }
    }
  }
`;

export const Sentence = styled.h1`
  font-size: 45px;
  margin-bottom: 30px;
  max-width: 410px;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;
