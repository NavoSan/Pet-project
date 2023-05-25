import React from "react";
import "../css/AboutPage.css";
import { image1, image2, image3, image4 } from '../images'



function AboutPage() {

  const images = {};
  function importAll(i) {
    i.keys().forEach((key) => (images[key] = i(key)));
  }
  importAll(require.context("../images", false, /\.(png|jpe?g|svg)$/));

  


  return (
    <div className="about-page">
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          sodales magna non sapien elementum, sit amet varius nisi pretium. In
          hac habitasse platea dictumst. Sed vitae sodales nibh. Nunc ac massa
          vel libero lacinia vestibulum. Aliquam erat volutpat. Nam aliquam
          vehicula ligula, in ullamcorper magna blandit vel. Curabitur euismod
          neque augue, in tristique justo tincidunt non. Ut ac volutpat magna.
          Donec sed venenatis felis, vel viverra nibh. In commodo odio nec
          felis rhoncus lacinia. Vivamus pharetra, ex id hendrerit lacinia,
          tortor sapien pharetra elit, in convallis tortor tellus vitae metus.
          Praesent in lobortis quam.
        </p>
        <p>
          Donec at nibh ex. Sed pharetra eleifend lacus, at ultricies enim
          consequat ac. Proin sem turpis, aliquam a sem in, vehicula fringilla
          arcu. In eleifend eget augue ut bibendum. Vivamus at felis sapien.
          Suspendisse fermentum euismod felis, sed hendrerit mauris dictum vel.
          Integer a elementum velit. Aenean vel pretium nunc, nec dignissim
          enim. Integer tincidunt imperdiet sapien, quis gravida orci cursus
          non. In hac habitasse platea dictumst.
        </p>
        
      </div>
      
      
      <div className="image-and-text-container">

        <div className="image-container">
          <img src={image1} alt="" />
        </div>
        <div className="text-container">
          <h2>Imagen 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut blandit nunc.</p>
        </div>
      </div>

      <div className="image-and-text-container">
        <div className="text-container">
          <h2>Imagen 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut blandit nunc.</p>
        </div>
        <div className="image-container">
          <img src={image2} alt="" />
        </div>
      </div>

      <div className="image-and-text-container">
        <div className="image-container">
          <img src={image3} alt="" />
        </div>
        <div className="text-container">
          <h2>Imagen 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut blandit nunc.</p>
        </div>
      </div>

      <div className="image-and-text-container">
        <div className="text-container">
          <h2>Imagen 4</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut blandit nunc.</p>
        </div>
        <div className="image-container">
          <img src={image4} alt="" />
        </div>
      </div>



    </div>
  );
}

export default AboutPage;
