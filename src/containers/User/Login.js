import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Navigate } from 'react-router';
import authenticate from '../../redux/actions/authenticate';
import { userLogin, loginFailure } from '../../redux/actions/login';

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authenticate);

  const [person, setPerson] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'http://localhost:8000/api/v1/users/login';
    axios
      .post(url, { ...person })
      .then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data));

        dispatch(
          userLogin({
            token: response.data.token,
            username: response.data.user.username,
          }),
        );
        dispatch(
          authenticate({
            status: true,
            token: response.data.token,
            username: response.data.user.username,
          }),
        );
      })
      .catch(() => {
        dispatch(loginFailure('Invalid username or Password. Try again!'));
      });
  };
  const { email, password } = person;
  return (
    <div className="col-4 login">
      <h2 className="text-center mb-4">User Login</h2>
      {auth.status && <Navigate to="/" replace />}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control mb-4"
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            className="form-control mb-3"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary  form-control">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
