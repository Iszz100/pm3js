import React from 'react';

const KartuSiswa = ({ nama, jurusan }) => {

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      width: '200px',
      textAlign: 'center',
      boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h3>{nama}</h3>
      <p>{jurusan}</p>
    </div>
  );
};

export default KartuSiswa;
