export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #b8860b, #ff4500)", // Golden to Red Gradient
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "10px" }}>
        Rithik Kumar
      </h1>
      <p style={{ fontSize: "1.5rem", margin: "5px 0" }}>Email: rithik@example.com</p>
      <p style={{ fontSize: "1.5rem", margin: "5px 0" }}>Phone: +123 456 7890</p>
    </div>
  );
}
