import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
    let dispatch = useDispatch();
    const history = useHistory();

    // let status = useSelector((state) => state.user.status);
    // let user = useSelector((state) => state.user.user);

    // Login
    const login = async (username, password) => {
        try {
            const response = await axios.post('/api/login', { username, password });
            if (response.data.success) {
                dispatch({ type: 'user/login', payload: response.data.user });
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'Welcome ' + response.data.user.name,
                });
                history.push('/'); // Redirect to homepage after successful login
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: response.data.message,
                });
            }
        } catch (error) {
            console.error('Error logging in:', error);
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'An error occurred while logging in. Please try again later.',
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        login(username, password);
    };

    return (
        <>
            <section id="login_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="account_form">
                                <h3>Login</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="default-form-box">
                                        <label>Username or email<span className="text-danger">*</span></label>
                                        <input type="text" name="username" className="form-control" required defaultValue="" />
                                    </div>
                                    <div className="default-form-box">
                                        <label>Passwords<span className="text-danger">*</span></label>
                                        <input type="password" name="password" className="form-control" required defaultValue="" minLength="8" />
                                    </div>
                                    <div className="login_submit">
                                        <button className="theme-btn-one btn-black-overlay btn_md" type="submit">login</button>
                                    </div>
                                    <div className="remember_area">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="materialUnchecked" />
                                            <label className="form-check-label" htmlFor="materialUnchecked">Remember me</label>
                                        </div>
                                    </div>
                                    <Link to="/register" className="active">Create Your Account?</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
