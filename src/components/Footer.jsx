// src/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <p>© {year} Kelompok 2 Nabil dan Louis. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    position: "fixed",     // biar selalu nempel bawah
    bottom: 0,
    left: 0,
    width: "100%",         // full width
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "15px 0",
  }
};
