// src/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <p>© {year} Louis Fachri Putra Jatmiko. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "40px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    color: "#333",
    borderTop: "1px solid #ddd"
  }
};
