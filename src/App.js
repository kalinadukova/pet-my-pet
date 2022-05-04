import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Details from "./components/Details";
import Footer from "./components/Register/Footer";
import Dashboard from './components/Dashboard';
import MyPets from './components/MyPets';
import Create from './components/Create';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div id="container">

      <Header />

      <main id="site-content">

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
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
