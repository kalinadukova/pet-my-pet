import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Details from "./components/Details";
import Footer from "./components/Footer/Footer";
import Dashboard from './components/Dashboard';
import MyPets from './components/MyPets';
import Create from './components/Create';
import Logout from "./components/Logout";
import Edit from './components/Edit';
import { AuthContext } from './context/AuthContext'
import useLocalStorage from "./hooks/useLocalStorage";

import * as authService from './services/authService';

import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

const initialAuthState = {
  _id: null,
  accessToken: null,
  email: null
};

function App() {
  const [userInfo, setUserInfo] = useLocalStorage('userInfo', initialAuthState);

  function login(data) {
    setUserInfo(data);
  }

  function logout() {
    setUserInfo(initialAuthState);
  }

  return (
    <AuthContext.Provider value={{ userInfo, login, logout }}>
      <div id="container">

        <Header email={userInfo.email} />

        <main id="site-content">

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/my-pets" element={<MyPets />} />
            <Route path="/create" element={<Create />} />
            <Route path="/details/:petId" element={<Details />} />
            <Route path="/details/:petId/edit" element={<Edit />} />

          </Routes>

        </main>

        <Footer />

      </div>
    </AuthContext.Provider>
  );
}

export default App;
