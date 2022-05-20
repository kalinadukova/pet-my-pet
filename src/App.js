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

import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

function App() {

  return (
    <AuthContextProvider>
      <div id="container">

        <Header />
        {/* email={userInfo.email} */}

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
    </AuthContextProvider>

  );
}

export default App;
