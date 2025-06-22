import React from 'react';
import '../styles/CategoryGrid.css';
// Impor gambar-gambar yang diperlukan (gunakan placeholder jika belum ada)
import alatBeratImage from '../assets/pngtree-tipper-dump-truck-lorry-png-image_10205784.png';
// ... impor gambar lainnya

// Buat objek yang menghubungkan kategori dengan gambar
const categoryImages = {
  "Alat Berat": alatBeratImage
  // "Alat Elektronik": alatElektronikImage,
  // ... tambahkan mapping untuk kategori lainnya
  // Untuk kategori yang belum ada gambarnya, bisa menggunakan gambar default
};

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
            <div className="category-image-container">
              <img 
                src={categoryImages[cat] || alatBeratImage} // Fallback ke gambar default jika tidak ada
                alt={cat} 
                className="category-image"
              />
            </div>
            <p className="category-name">{cat}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;