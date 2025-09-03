import './App.css';
import Header from './components/header';
import Absensi from "./components/Absensi";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main style={styles.main}>
        <h2>Welcome to My Landing Page!</h2>
        <p>Halo.</p>
        <Absensi />
      </main>
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
