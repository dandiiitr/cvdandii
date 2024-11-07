"use client";  // Tambahkan ini untuk menjadikan komponen client-side

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0); // State untuk rating

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClear = () => {
    setFormData({
      nama: '',
      email: '',
      pesan: '',
    });
    setRating(0); // Reset rating saat form dibersihkan
  };

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', alignItems: 'center', backgroundColor: '#f4f7fa' }}>
      {submitted ? (
        <div style={{ textAlign: 'center', color: '#333' }}>
          <h2>Data berhasil dikirim!</h2>
          <p>
            Nama: {formData.nama}, <br />
            Email: {formData.email}, <br />
            Pesan: {formData.pesan} <br />
            Rating: {rating} bintang
          </p>
          <p>Data di atas akan segera di input ke database. Terima kasih!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ width: '350px', background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', fontFamily: 'Arial, sans-serif' }}>
          <h2 style={{ textAlign: 'center', color: '#333' }}>Contact Form</h2>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="nama" style={{ fontWeight: 'bold', color: '#333' }}>Nama:</label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              style={{ width: '100%', padding: '12px', marginTop: '8px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', outline: 'none' }}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ fontWeight: 'bold', color: '#333' }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '12px', marginTop: '8px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', outline: 'none' }}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="pesan" style={{ fontWeight: 'bold', color: '#333' }}>Pesan:</label>
            <textarea
              id="pesan"
              name="pesan"
              value={formData.pesan}
              onChange={handleChange}
              style={{ width: '100%', padding: '12px', marginTop: '8px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', outline: 'none', height: '100px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontWeight: 'bold', color: '#333' }}>Rating:</label>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRating(star)}
                  style={{
                    cursor: 'pointer',
                    fontSize: '30px', // Perbesar ukuran bintang
                    margin: '0 5px',
                    color: star <= rating ? '#FFD700' : '#ccc',
                    transition: 'transform 0.3s ease, color 0.3s ease', // Transisi halus
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.3)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button type="submit" style={{ padding: '12px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', transition: 'background-color 0.3s' }}>
              Submit
            </button>
            <button type="button" onClick={handleClear} style={{ padding: '12px 20px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', transition: 'background-color 0.3s' }}>
              Clear
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
