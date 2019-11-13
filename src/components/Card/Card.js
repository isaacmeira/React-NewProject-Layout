import React, { useEffect, useState } from 'react';
import { Title, Main, Content, Next, Paragraphy } from './styles';
import NumberFormat from 'react-number-format';
import { Circle } from 'styled-spinkit';

import api from '../../services/api';

export default function Card() {
  const [allPlanets, updatePlanets] = useState(0);
  const [element, setElement] = useState({});

  const fetchData = async () => {
    const { data } = await api.get(`/`);
    updatePlanets(data.count);
  };

  const retrieveData = async () => {
    const { data } = await api.get(
      `/${Math.floor(Math.random() * allPlanets + 1)}`
    );
    setElement(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
    retrieveData();
  }, []);

  return element.name ? (
    <>
      <Main>
        <Title>{element.name}</Title>
        <Content>
          <Paragraphy>
            Population:{' '}
            <NumberFormat
              value={element.population}
              displayType={'text'}
              thousandSeparator={true}
            />
            .
          </Paragraphy>
          <Paragraphy>Climate: {element.climate}.</Paragraphy>
          <Paragraphy>Terrain: {element.terrain}.</Paragraphy>
          <Paragraphy>Fatured in {element.films.length} films</Paragraphy>
        </Content>
        <Next onClick={() => retrieveData()}> Next </Next>
      </Main>
    </>
  ) : (
    <Circle color="#FFF"></Circle>
  );
}
