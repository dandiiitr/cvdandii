import React from 'react';
import Image from 'next/image';
import Tidur from '../assets/2.jpg';
import Makan from '../assets/1.jpg';
import Game from '../assets/3.jpg';
import Jogging from '../assets/4.jpg';
import Travelling from '../assets/5.jpg';
import coding from '../assets/6.jpg';
import './hobi.css'; 

const MyGallery = () => {
  const Hobbies = [
    { name: "Sleeping", image: Tidur },
    { name: "Eating", image: Makan },
    { name: "Gaming", image: Game },
    { name: "Jogging", image: Jogging },
    { name: "Travelling", image: Travelling },
    { name: "Coding", image: coding },
  ];

  return (
    <section className="gallery-container">
      <h2 className="gallery-title">My Hobbies</h2>
      <div className="gallery">
        {Hobbies.map((hobby, index) => (
          <div key={index} className="gallery-card">
            <Image 
              src={hobby.image} 
              alt={hobby.name} 
              className="gallery-image" 
              layout="intrinsic" 
              width={350} 
              height={250} 
            />
            <div className="gallery-caption">
              <h3>{hobby.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyGallery;
