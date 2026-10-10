import { useState } from "react";

function CertificateLibrary({ onBack }) {
  const [search, setSearch] = useState("");

  const certificates = [
    {
      name: "Malaysia",
      authority: "JAKIM / JAIN / MAIN",
      description: "Malaysian Halal Certification reference",
    },
    {
      name: "Indonesia",
      authority: "BPJPH",
      description: "Indonesian Halal Certification reference",
    },
    {
      name: "Singapore",
      authority: "MUIS",
      description: "Singapore Halal Certification reference",
    },
  ];

  const filtered = certificates.filter((item) =>
    `${item.name} ${item.authority}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#eef6fc",
        padding: "35px 20px",
        fontFamily: "Arial, sans-serif",
        color: "#164b82",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <button
          onClick={onBack}
          style={{
            background: "#0284c7",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          ← Back to Dashboard
        </button>

        <h1 style={{ textAlign: "center", fontSize: "42px" }}>
          📜 Certificate Library
        </h1>

        <p style={{ textAlign: "center" }}>
          Explore Global Halal Certification References
        </p>

        <input
          type="text"
          placeholder="Search country or halal authority..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "16px",
            borderRadius: "10px",
            border: "1px solid #cbd5e1",
            margin: "25px 0",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "20px",
          }}
        >
          {filtered.map((item) => (
            <article
              key={item.name}
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "16px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
              }}
            >
              <h2>{item.name}</h2>
              <p>
                <strong>{item.authority}</strong>
              </p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: "center" }}>No matching references found.</p>
        )}

        <p style={{ marginTop: "35px", textAlign: "center" }}>
          Reference information only. Verify current recognition and certificate
          validity with the relevant authorities.
        </p>
      </div>
    </main>
  );
}

export default CertificateLibrary;
