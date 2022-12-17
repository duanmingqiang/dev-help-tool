import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { ViewJSon } from './views/json-parse';
import { PlanList } from './views/plan';
import { Quodrant } from './views/quadrant';

const  App:FC = () => {
  return (
    <div className="App">
      <div className='wrap-container'>
        <Routes>
          <Route path='/' element={<ViewJSon/>}></Route>
          <Route path='/plan' element={<PlanList/>}></Route>
          <Route path='/quodrant' element={<Quodrant/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
