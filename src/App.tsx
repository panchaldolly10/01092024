import React from 'react';
import './App.css';
import LoginButton from './component/signinbutton';
//import LogoutButton from './component/signoutbutton';
import AddCandidate from './component/addcandidate';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App: React.FC = () => {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginButton />} />
        <Route path="/addcandidate" element={<AddCandidate />} />
      </Routes>
      </Router>
  );
};

export default App;