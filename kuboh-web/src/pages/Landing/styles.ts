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

  button {
    background: #4abdac;

    &:hover {
      background-color: ${shade(0.2, '#4ABDAC')};
    }
    & + button {
      background: #dfdce3;
    }
    & + button:hover {
      background: ${shade(0.2, '#dfdce3')};
    }
  }

  justify-content: center;
  align-items: center;
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
