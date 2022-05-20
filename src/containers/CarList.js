import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Car from '../components/Car';
import { fetchCars } from '../utils/carUtils';

const CarList = () => {
  const cars = useSelector((state) => state.cars.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCars(dispatch);
  }, []);

  return (
    <>
      <div className="container">
        <div className='carlist'>
          {cars.map((car) => {
            const { _id, mileage, price, description, carModel, images, carMake, year } =
              car;
            return (
              <Car
                key={_id}
                id={_id}
                carMake={carMake}
                carModel={carModel}
                mileage={mileage}
                description={description}
                price={price}
                image={images[0]}
                year={year}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CarList;
