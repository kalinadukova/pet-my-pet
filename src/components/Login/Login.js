import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';


import { useAuthContext } from '../../context/AuthContext';

const Login = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    function onLoginHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login({ email, password })
            .then(data => {
                login(data);
                navigate('/')

            })
            .catch(err => console.log(err));


    }
    return (
        <section id="login-page" className="login">
            <form id="login-form" onSubmit={onLoginHandler}>
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    );
};

export default Login;