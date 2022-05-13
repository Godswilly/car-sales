/* eslint-disable camelcase */

import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { singleCar } from '../redux/actions/carActions';


const CarDetails = () => {
  const details= useSelector((state) => state.car.details);
  const dispatch = useDispatch();
  const { id } = useParams();
  const url = `http://localhost:8000/api/v1/cars/${id}`;

  const fetchDetails = async () => {
    const response = await axios.get(url, { mode: 'cors' });
    dispatch(singleCar(response.data.data.car));
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);
  const { mileage, price, description, carModel, images, carMake, year } =
    details;
  return (
    <div className="container">
      <div>
        <h3>
          Car Model:
          {carModel}
        </h3>
        <h3>
          Car Make:
          {carMake}
        </h3>
        <h3>
          Mileage:
          {mileage}
        </h3>
        <p>
          Year:
          {year}
        </p>
        <p>Price: ${price}</p>
        <img src={images} alt={carMake} className="detail-img" />
      </div>
      <div className="description">
        <h3 className="text-decoration-underline">Car Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CarDetails;
