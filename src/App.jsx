import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import InputNama from './components/InputNama';

function App() {
  return (
    <>
      <Header />

    
      <main style={styles.main}>
        <InputNama />
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
