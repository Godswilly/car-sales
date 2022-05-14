import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import CarDetails from '../containers/CarDetails';
import SignUp from '../containers/User/SignUp';
import Login from '../containers/User/Login';
import Logout from '../containers/User/Logout';
import NewCar from '../containers/NewCar';
import Error from './Error';
import authenticate from '../redux/actions/authenticate';
import CarList from '../containers/CarList';
import MyCars from '../containers/MyCars';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem('token');
    if (user) {
      dispatch(
        authenticate({
          status: true,
          token: user.token,
          email: user.email,
        }),
      );
    } else {
      dispatch(authenticate());
    }
  }, []);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<CarList />} />
        <Route exact path="/cars" element={<CarList />} />
        <Route path="my-cars" element={<MyCars />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/logout" exact element={<Logout />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/create-car" exact element={<NewCar />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
