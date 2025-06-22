import React from 'react';
import '../styles/CategoryGrid.css';

const categories = [
  "Alat Berat", "Alat Elektronik", "Alat Industri",
  "Alat Mekanik", "Pelindung Diri", "Alat Ukur",
  "Bahan Kimia", "Karet & Plastik", "Konstruksi",
  "Lampu", "Mesin", "Perkakas"
];

function CategoryGrid() {
  return (
    <section className="category-section">
      <h2 className="header-product">Kategori Produk</h2>
      <div className="category-grid">
        {categories.map((cat, i) => (
          <div key={i} className="category-card">
            <p>{cat}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;
