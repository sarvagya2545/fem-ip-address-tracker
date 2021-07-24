import React from 'react';
import './scss/main.scss';
import Map from './components/Map';
import TopBg from './components/TopBg';
import Input from './components/Input';
import Details from './components/Details';

function App() {
  return (
    <div className="app">
      <TopBg>
        <Input/>
      </TopBg>
      <Details/>
      <Map/>
    </div>
  )
}

export default App
