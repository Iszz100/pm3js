import React, { useState } from 'react';
import './App.css';

// Komponen lokal kamu
import Header from './components/Header';
import Footer from './components/Footer';
import InputNama from './components/InputNama';
import KartuSiswa from './components/KartuSiswa';


// Komponen testimoni
import TestimonialForm from './components/TestimonialForm';
import TestimonialQuote from './components/TestimonialQuote';

function App() {

    const dataSiswa = [
{ nama: 'Kayla Reyvani', jurusan: 'SIJA' },
{ nama: 'Raffi Akbar', jurusan: 'SIJA' },
{ nama: 'Bima Aji', jurusan: 'SIJA' }
];

  const [testimonials, setTestimonials] = useState([]);

  const handleAddTestimonial = (newTestimonial) => {
    setTestimonials([...testimonials, newTestimonial]);
  };

  return (
    <>
      <Header />

    
      <main style={styles.main}>

        {/* Komponen InputNama */}
        <section style={{ marginBottom: '40px' }}>
          <InputNama />
        </section>

        {/* Komponen Testimoni */}
        <section className="testimonials-container">
          <h1 className="main-title">Halaman Testimoni</h1>

          <div className="form-section" style={{ marginBottom: '30px' }}>
            <TestimonialForm onAddTestimonial={handleAddTestimonial} />
          </div>

          <div className="testimonials-section">
            <h2 className="section-title">Testimoni Pengguna</h2>
            {testimonials.length === 0 ? (
              <p className="no-testimonials">
                Belum ada testimoni. Jadilah yang pertama!
              </p>
            ) : (
              testimonials.map((t, index) => (
                <TestimonialQuote
                  key={index}
                  name={t.name}
                  testimonial={t.testimonial}
                  date={t.date}
                />
              ))
            )}
          </div>
        </section>
      </main>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
      {dataSiswa.map((siswa, index) => (
        <KartuSiswa
          key={index}
          nama={siswa.nama}
          jurusan={siswa.jurusan}
        />
      ))}
    </div>


      <Footer />
    </>
  );
}

const styles = {
  main: {
    padding: '40px',
    textAlign: 'center'
  }
};

export default App;
