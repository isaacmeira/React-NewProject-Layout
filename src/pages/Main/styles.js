import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 70px;
  font-weight: bolder;
  color: ${props => (props.error ? 'red' : '#7189;')};
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 30px;
`;
