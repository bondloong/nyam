import React, {useState} from 'react';
import s from 'styled-components'
import TovarCard from './TovarCard/TovarCard'
import {initialState} from './data.js';
const AppMain = s.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`
const AreYou = s.h1`
  font-size: 30pt;
  text-align: center;
  color: white;
  font-weight: lighter;
  font-family: 'Exo 2.0 Thin';
`

function App() {
  const [data] = useState(initialState)
  return (
  <>
    <AreYou>Ты сегодня покормил кота?</AreYou>
    <AppMain>
      {
        data.map((item, index) => {
          return <TovarCard key={index} item={item} ></TovarCard>
        })
      }
    </AppMain>
  </>
  );
}

export default App;
