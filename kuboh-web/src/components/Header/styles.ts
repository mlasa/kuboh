import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  align-items: baseline;
  margin-bottom: 20px;

  h2 {
    font-family: 'Signika', sans-serif;
    margin: 10px;
    margin-right: 30px;
    color: #282828;
    font-size: 30px;
  }

  a {
    font-size: 18px;
    color: #282828;
    margin-right: 10px;

    &:hover {
      color: #eb7434;
    }
  }
`;
