"use client";

import React, { useState, useEffect } from "react";

export default function WarnaFavorit() {
  const [warna, setWarna] = useState("light"); // Default tema adalah 'light'

  // Pilihan tema yang ada
  const pilihanWarna = ["dark", "light", "cream"];

  // Gunakan useEffect untuk mengubah background berdasarkan pilihan tema
  useEffect(() => {
    if (warna === "dark") {
      document.body.style.backgroundColor = "#333"; // Dark background
      document.body.style.color = "white"; // Text color untuk tema gelap
    } else if (warna === "light") {
      document.body.style.backgroundColor = "#f4f4f4"; // Light background
      document.body.style.color = "black"; // Text color untuk tema terang
    } else if (warna === "cream") {
      document.body.style.backgroundColor = "#f5e6cc"; // Cream background
      document.body.style.color = "black"; // Text color untuk tema krim
    }
  }, [warna]); // Re-run effect hanya jika warna berubah

  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          gap: "20px", // Gap antar tombol
        }}
      >
        {pilihanWarna.map((warnaPilihan) => (
          <button
            key={warnaPilihan}
            onClick={() => setWarna(warnaPilihan)} // Ketika tombol diklik, set warna
            style={{
              backgroundColor:
                warnaPilihan === "dark"
                  ? "#444"
                  : warnaPilihan === "light"
                  ? "#fff"
                  : "#f5e6cc", // Sesuaikan warna tombol
              color: warnaPilihan === "light" ? "black" : "white", // Sesuaikan warna teks
              padding: "12px 20px", // Padding tombol yang lebih besar
              border: "none",
              borderRadius: "8px", // Membuat sudut tombol lebih melengkung
              cursor: "pointer",
              fontSize: "16px", // Ukuran font yang lebih besar
              fontWeight: "bold", // Menebalkan teks untuk kesan lebih menarik
              boxShadow: warna === warnaPilihan ? "0 0 12px rgba(0, 0, 0, 0.5)" : "none", // Highlight tombol yang aktif
              transition: "all 0.3s ease", // Transisi halus
            }}
            // Tambahkan pengecekan untuk e.target agar dapat mengubah style
            onMouseEnter={(e) => {
              const target = e.target as HTMLButtonElement; // Pengecekan tipe target
              target.style.transform = "scale(1.1)"; // Memperbesar tombol sedikit ketika hover
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLButtonElement; // Pengecekan tipe target
              target.style.transform = "scale(1)"; // Kembalikan ukuran tombol setelah hover
            }}
          >
            {warnaPilihan.toUpperCase()}
          </button>
        ))}
      </div>
    </section>
  );
}
