import React,{useEffect,useState} from 'react';

import './App.css';
import Inputtodo from './components/Inputtodo';
import Listtodo from './components/Listtodo';

const App = () => {
  return(
    <div>
      <Inputtodo/>
      <Listtodo/>
    </div>
  );
}

export default App;
