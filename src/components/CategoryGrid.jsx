import React from 'react';
import '../styles/CategoryGrid.css';
import alatBeratImage from '../assets/alatBerat.png';
import alatElektronikImage from '../assets/alatElektronik.png';
import alatIndustriImage from '../assets/alatIndustri.png';
import alatMekanikImage from '../assets/alatMekanik.png';
import pelindungDiriImage from '../assets/pelindungDiri.png';
import alatUkurImage from '../assets/alatUkur.png';
import bahanKimiaImage from '../assets/bahanKimia.png';
import karetPlastikImage from '../assets/karetDanPlastik.png';
import konstruksiImage from '../assets/konstruksi.png';
import lampuImage from '../assets/lampu.png';
import mesinImage from '../assets/mesin.png';
import perkakasImage from '../assets/perkakas.png';

const categories = [
  { name: "Alat Berat", image: alatBeratImage },
  { name: "Alat Elektronik", image: alatElektronikImage },
  { name: "Alat Industri", image: alatIndustriImage },
  { name: "Alat Mekanik", image: alatMekanikImage },
  { name: "Pelindung Diri", image: pelindungDiriImage },
  { name: "Alat Ukur", image: alatUkurImage },
  { name: "Bahan Kimia", image: bahanKimiaImage },
  { name: "Karet & Plastik", image: karetPlastikImage },
  { name: "Konstruksi", image: konstruksiImage },
  { name: "Lampu", image: lampuImage },
  { name: "Mesin", image: mesinImage },
  { name: "Perkakas", image: perkakasImage }
];

function CategoryGrid() {
  return (
    <section className="category-section">
      <h2 className="header-product">Kategori Produk</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="image-container">
              <img 
                src={category.image} 
                alt={category.name} 
                className="category-image"
              />
            </div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;