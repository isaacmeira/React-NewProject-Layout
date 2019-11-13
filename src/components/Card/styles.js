import styled from 'styled-components';

export const Title = styled.div`
  font-size: 25px;
  color: #f54d;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  background-color: white;
  padding: 10px;
  border-radius: 4px;
  border: solid 2px #777;
`;

export const Paragraphy = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin-top: 25px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 350px;
  min-width: 365px;
`;

export const Content = styled.div`
  margin-top: 1%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
  padding: 30px 20px;
  border-radius: 4px;
  border: solid 2px #777;
  box-shadow: 0 0 20px rgba(2, 2, 2, 0.1);
`;

export const Next = styled.button`
  height: 40px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  padding: 5px;
  background: #f54d;
  margin: auto;
  border: none;
  border-radius: 4px;
`;
