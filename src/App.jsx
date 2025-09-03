import './App.css';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <main style={styles.main}>
        <h2>Welcome to My Landing Page!</h2>
        <p>Halo.</p>
      </main>
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
