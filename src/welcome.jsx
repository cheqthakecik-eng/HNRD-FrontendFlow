function Welcome({ onExplore }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #164b82, #3289c7)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <p style={{ color: "#7dd3fc", letterSpacing: "3px" }}>
        RHYNO DEVS PRESENTS
      </p>

      <h1
        style={{
          fontFamily: "'Poppins', Arial, sans-serif",
          fontSize: "70px",
          fontWeight: "800",
          letterSpacing: "-2px",
          marginBottom: "10px",
          color: "white",
        }}
      >
        Halal<span style={{ color: "#7de3ff" }}>Nadi</span>
      </h1>

      <h2 style={{ color: "white", marginTop: "20px", fontSize: "28px" }}>
        Welcome to HalalNadi
      </h2>

      <p style={{ maxWidth: "550px", lineHeight: "1.8" }}>
        Your AI-Powered Halal Compliance and Business Management Platform.
      </p>

      <button
        onClick={onExplore}
        style={{
          background: "#0284c7",
          color: "white",
          padding: "15px 30px",
          border: "none",
          borderRadius: "10px",
          marginTop: "25px",
          cursor: "pointer",
        }}
      >
        Explore HalalNadi
      </button>
    </div>
  );
}

export default Welcome;
