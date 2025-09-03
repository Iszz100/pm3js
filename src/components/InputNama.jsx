import { useState } from "react";

export default function InputNama() {
  const [nama, setNama] = useState("");

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>✨ Halo, Selamat Datang ✨</h2>
        <input
          type="text"
          placeholder="Ketik nama kamu..."
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          style={styles.inputBox}
        />
        <p style={styles.greeting}>
          {nama
            ? `Halo, ${nama}! Senang bertemu denganmu 👋`
            : "Tuliskan nama kamu di atas 👆"}
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh", // biar selalu full tinggi layar
    width: "100%", // biar full lebar layar
    fontFamily: "'Poppins', sans-serif",
    padding: "100px", // biar ada jarak di HP kecil
    boxSizing: "border-box",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px", // biar responsif
    transition: "transform 0.3s ease",
  },
  title: {
    fontSize: "22px",
    marginBottom: "20px",
    color: "#333",
  },
  inputBox: {
    width: "100%",
    padding: "9px",
    borderRadius: "10px",
    border: "2px solid #2193b0",
    outline: "none",
    fontSize: "16px",
    marginBottom: "20px",
    transition: "0.3s",
  },
  greeting: {
    fontSize: "18px",
    color: "#444",
    fontWeight: "500",
  },
};
