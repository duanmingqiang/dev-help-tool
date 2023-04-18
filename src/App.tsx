import { FC, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';

import { ViewJSon } from './views/json-parse';
import { PlanList } from './views/plan';
import { Quodrant } from './views/quadrant';
import { BeastFightingChess } from './views/beast-fighting-chess'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
const items: MenuProps['items'] = [
  {
    label: (<Link to="/">json格式化</Link>),
    key: 'json',
    icon: <MailOutlined />,
  },
  {
    label: (<Link to="/plan">计划</Link>),
    key: 'plan',
    icon: <AppstoreOutlined />,
  },
  {
    label: (<Link to="/quodrant">四象限</Link>),
    key: 'quodrant',
    icon: <SettingOutlined />,
  },
  {
    label: (<Link to="/beast-fighting-chess">斗兽棋</Link>),
    key: 'beast-fighting-chess',
    icon: <SettingOutlined />,
  },
  
];

const  App:FC = () => {
  const [current, setCurrent] = useState('json');

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div className="App">
      <div className='app-header'>
        <p>随便写点，后面在优化</p>
      </div>
      <div className='main'>
        <div className='sidebar'>
          <Menu onClick={onClick} selectedKeys={[current]} mode="inline" items={items} />;
        </div>
        <div className='content'>
          <Routes>
            <Route path='/' element={<ViewJSon/>}></Route>
            <Route path='/plan' element={<PlanList/>}></Route>
            <Route path='/quodrant' element={<Quodrant/>}></Route>
            <Route path='/beast-fighting-chess' element={<BeastFightingChess/>}></Route>
          </Routes>
        </div>
      </div>
      {/* <div className='wrap-container'>
        <div>
        <Menu onClick={onClick} selectedKeys={[current]} mode="inline" items={items} />;
        </div>
        <Routes>
          <Route path='/' element={<ViewJSon/>}></Route>
          <Route path='/plan' element={<PlanList/>}></Route>
          <Route path='/quodrant' element={<Quodrant/>}></Route>
        </Routes>
      </div> */}
    </div>
  );
}

export default App;
