import React from 'react';
import '../styles/Hero.css';
import bannerImage from '../assets/banner2.png';

function Hero() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="hero-container">
      <div className="hero-text">
        <h1 className="hero-title">
          Apa itu IndoTrading? <br />
          <span className="highlight">Direktori Bisnis Supplier Terbesar di Indonesia.</span>
        </h1>
        <p className="hero-subtitle">
          Situs Jual Beli khusus B2B Marketplace, B2B E-commerce, B2B, Pusat Distributor, Pabrik, Trading, Supplier, Agen, Grosir, Importir, Exportir dan Penyedia Jasa terlengkap di Indonesia.
        </p>
        <button className="hero-button">DAFTAR SEKARANG</button>
      </div>
      <div className="hero-image">
        <img src={bannerImage} alt="Indotrading Banner" />
      </div>  
    </section>

  );
}

export default Hero;
