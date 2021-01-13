import styled from 'styled-components';
import { shade } from 'polished';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
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

  h1 {
    font-size: 45px;
    max-width: 300px;
    margin-bottom: 30px;
    text-align: center;
  }

  input {
    width: 340px;
    height: 40px;
    margin-bottom: 5px;
    padding: 5px;
    & + input {
      margin-bottom: 10px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  img {
    margin-left: 40px;
    align-self: auto;
  }
`;
