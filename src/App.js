import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'antd'
import TemplatePage from './client/templatePage';
import HomePage from './client/home';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/template" element={<TemplatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
