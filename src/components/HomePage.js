import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import "../css/HomePage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomePage = () => {

  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      setImages(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getImages();
  }, []);

  return (

    <div className="home-page">


      <div className="hero-section">
        <h1>Bienvenidos a mi sitio web</h1>
        <p>
          Este es un sitio web dedicado al sexo
        </p>
      </div>

      <Carousel showArrows={true} showThumbs={false}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.download_url} alt={image.author} />
          </div>
        ))}
      </Carousel>

      <div className="features-section">
        <div className="feature">
          <h3>Productos de calidad</h3>
          <p>
            Ofrecemos productos de alta calidad para garantizar la satisfacción
            del cliente.
          </p>
        </div>
        <div className="feature">
          <h3>Envío gratis</h3>
          <p>
            Ofrecemos envío gratis en todos nuestros productos para ayudarte a
            ahorrar dinero.
          </p>
        </div>
        <div className="feature">
          <h3>Soporte en línea</h3>
          <p>
            Ofrecemos soporte en línea para garantizar que nuestros clientes
            estén satisfechos con sus compras.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

