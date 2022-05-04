import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Details from "./components/Details";
import Footer from "./components/Register/Footer";
import Dashboard from './components/Dashboard';
import MyPets from './components/MyPets';
import Create from './components/Create';
import * as authService from './services/authService';

import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [userInfo, setUserInfo] = useState({ isAuthenticated: false, email: '' })

  useEffect(() => {
    let user = authService.getUser();
    setUserInfo({
      isAuthenticated: Boolean(user),
      email: user
    })
  }, [])

  function onLogin(username) {
    setUserInfo({
      isAuthenticated: true,
      email: username
    })
  }

  return (
    <div id="container">

      <Header {...userInfo} />

      <main id="site-content">

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-pets" element={<MyPets />} />
          <Route path="/create" element={<Create />} />

        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;
