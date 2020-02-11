import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Profile";

const App = () => {
    return (
        <div className="app-wrapper">
          <Header />
          <Sidebar/>
          <Content/>
        </div>
    );
};

export default App;
