import React from 'react';
import './App.css';


import rb19Img from './img/RB19.webp';
import w14Img from './img/W14.jpg';
import sf23Img from './img/SF 23.jpg';
import mcl60Img from './img/MCL60-003.jpg';
import amr23Img from './img/AMR23.webp';

function App() {
  
  const f1Cars = [
    {
      id: 1,
      title: "Red Bull Racing RB19",
      imageUrl: rb19Img 
    },
    {
      id: 2,
      title: "Mercedes W14",
      imageUrl: w14Img
    },
    {
      id: 3,
      title: "Ferrari SF-23",
      imageUrl: sf23Img
    },
    {
      id: 4,
      title: "McLaren MCL60",
      imageUrl: mcl60Img
    },
    {
      id: 5,
      title: "Aston Martin AMR23",
      imageUrl: amr23Img
    }
  ];

  return (
    <div className="app-container">
      <h1 className="gallery-header">F1 Car Gallery</h1>
      
      <div className="grid-container">
        {f1Cars.map((car) => (
          <div className="card" key={car.id}>
            <img src={car.imageUrl} alt={car.title} className="card-image" />
            <h3 className="card-title">{car.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;