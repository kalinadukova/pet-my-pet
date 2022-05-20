import { useAuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Header = () => {
    const { userInfo } = useAuthContext();
    let guestNavigation = (
        <div id="guest">
            <Link className="button" to="/login">Login</Link>
            <Link className="button" to="/register">Register</Link>
        </div>
    );

    let userNavigation = (
        <div id="user">
            <span>Welcome, {userInfo.email}</span>
            <Link className="button" to="/my-pets">My Pets</Link>
            <Link className="button" to="/create">Add Pet</Link>
            <Link className="button" to="/logout">Logout</Link>
        </div>
    );

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/">Dashboard</Link>

                    {userInfo.email
                        ? userNavigation
                        : guestNavigation
                    }
                </section>
            </nav>
        </header>
    );
};

export default Header;