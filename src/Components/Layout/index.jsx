import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import React from 'react';
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags"/>

        <Outlet />
        <span className="tags bottom-tags">
          <br />
          <span className="bottom-tag-html"/>
        </span>
      </div>
    </div>
  );
};

export default Layout