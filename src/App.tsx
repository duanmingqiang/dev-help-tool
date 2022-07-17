import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { ViewJSon } from './views/json-parse';

const  App:FC = () => {
  return (
    <div className="App">
      <div className='wrap-container'>
        <Routes>
          <Route path='/' element={<ViewJSon/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
