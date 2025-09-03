import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import InputNama from './components/InputNama';
import KartuSiswa from './components/KartuSiswa';


function App() {
    const dataSiswa = [
{ nama: 'Kayla Reyvani', jurusan: 'SIJA' },
{ nama: 'Raffi Akbar', jurusan: 'SIJA' },
{ nama: 'Bima Aji', jurusan: 'SIJA' }
];
  return (
    <>
      <Header />

    
      <main style={styles.main}>
        <InputNama />
        
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
