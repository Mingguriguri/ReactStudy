import React, { useState } from "react";

const car = [
    {id: 1, name: "GRANDEUR", price: 4500, desc: "Graceful Design", img: "GRANDEUR.jpg"},
    {id: 2, name: "BMW", price: 7800, desc: "Functional of high level", img: "BMW.jpg"},
    {id: 3, name: "GENESIS", price: 6700, desc: "Popular Car", img: "GENESIS.jpg"},
    {id: 4, name: "TESLA", price: 8600, desc: "Cool Electric Car", img: "TESLA.jpg"},
    {id: 5, name: "BENZ", price: 6000, desc: "People's Dream Car", img: "benz.jpg"}
];


const CarItem = ({ car }) => {
    return (

        <div className="CarItem">
            <div>
                <b> [{car.id}] {car.name}</b>
            </div>
 
            <img className="car-image" src={`image/${car.img}`} alt={car.name} />
        
            <div>
                <span>
                    {""} {car.price}
                    {"$,  "}
                    {car.desc} {""}
                </span>
            </div>

        </div>
      );   
    
};

const Car = () => {     
    
    return (
        <div className = "App">
            <h1> CAR LIST </h1>
            <p> 201939734 Kim Min Jeong </p>
            <div className="car-list-container">
            {
                car.map((car) => (
                    <CarItem car={car} />
                ))
            }
            </div>
        </div>
    );
};

export default Car;