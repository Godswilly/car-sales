import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Car = ({
  id,
  mileage,
  price,
  description,
  carModel,
  image,
  carMake,
  year,
}) => (
  <div className="" key={id}>
    <Link className="card " to={`/car/${id}`}>
      <div>
        <img className="my-image" src={image} alt={carMake} />
      </div>
      <div>
        <h3 className="my-title">{mileage}</h3>
      </div>
      <div>
        <h3 className="my-title">{description}</h3>
      </div>
      <div>
        <h3 className="my-title">{carModel}</h3>
      </div>
      <div>
        <h3 className="my-title">{year}</h3>
        <h3 className="title text-success">$ {price}</h3>
      </div>
    </Link>
  </div>
);

Car.propTypes = {
  id: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
  images: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  carMake: PropTypes.string.isRequired,
  carModel: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Car;
