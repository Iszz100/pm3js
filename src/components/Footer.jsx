// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} My React App. All rights reserved.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    position: "fixed",     
    bottom: 0,
    left: 0,
    width: "100%",        
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "15px 0",
  }
};

// pada kode ini mengambil dari kelompok 5 tantangan 2 yaitu footer
// disini kita mengubah pada bagian stylingnya saja
// dari yang awalnya menggunakan tailwind css menjadi inline styling
// sehingga tidak perlu mengimpor tailwind css di file ini
