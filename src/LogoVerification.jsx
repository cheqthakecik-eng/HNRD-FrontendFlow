import { useState } from "react";

function LogoVerification({ onBack }) {
  const [country, setCountry] = useState("Malaysia");
  const [product, setProduct] = useState("");
  const [result, setResult] = useState("");

  function checkLogo() {
    if (!product.trim()) {
      setResult("Please enter a product or halal logo name.");
      return;
    }

    setResult(
      `You searched for "${product}" in ${country}. This is a demo search. Please verify certification status through the official halal authority.`,
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#eef6fc",
        padding: "35px 20px",
        fontFamily: "Arial, sans-serif",
        color: "#164b82",
        textAlign: "center",
      }}
    >
      <button
        onClick={onBack}
        style={{
          background: "#0284c7",
          color: "white",
          border: "none",
          padding: "12px 22px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        ← Back to Dashboard
      </button>

      <h1>🔎 Halal Logo Verification</h1>
      <p>Check halal certification references by country</p>

      <section
        style={{
          background: "white",
          maxWidth: "650px",
          margin: "35px auto",
          padding: "30px",
          borderRadius: "18px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2>Verify Halal Logo</h2>

        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "15px",
            borderRadius: "8px",
          }}
        >
          <option>Malaysia</option>
          <option>Indonesia</option>
          <option>Singapore</option>
        </select>

        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="Enter product or halal logo name"
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "14px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
          }}
        />

        <button
          onClick={checkLogo}
          style={{
            background: "#0284c7",
            color: "white",
            border: "none",
            padding: "14px 25px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Check Verification
        </button>

        {result && (
          <p
            role="status"
            style={{
              background: "#e0f2fe",
              padding: "18px",
              borderRadius: "10px",
              marginTop: "20px",
              lineHeight: "1.6",
            }}
          >
            {result}
          </p>
        )}
      </section>

      <p style={{ fontSize: "14px" }}>
        Demo only. HalalNadi does not issue or approve halal certificates.
      </p>
    </main>
  );
}

export default LogoVerification;
