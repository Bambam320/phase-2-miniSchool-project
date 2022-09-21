import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './components/App';
import Home from './components/Home';
import Faculty from './components/Faculty';
import Student from './components/Student';
import Explore from './components/Explore';
import Login from './components/Login';

const root = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="student" element={<Student />} />
          <Route path="explore" element={<Explore />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  root
);


