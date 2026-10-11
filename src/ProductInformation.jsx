const sampleProducts = {
  "09183476": {
    name: "Sample Food Product",
    category: "Food & Beverages",
    manufacturer: "Demo Manufacturer",
    halalStatus: "Not verified",
  },
  1234567890128: {
    name: "Sample Cosmetic Product",
    category: "Cosmetics",
    manufacturer: "Demo Beauty Company",
    halalStatus: "Not verified",
  },
  8901234567890: {
    name: "Sample Personal Care Product",
    category: "Personal Care",
    manufacturer: "Demo Care Company",
    halalStatus: "Not verified",
  },
  9551234567890: {
    name: "Sample Health Product",
    category: "Health Products",
    manufacturer: "Demo Health Company",
    halalStatus: "Not verified",
  },
};

export default function ProductInformation({ code, onBack }) {
  const normalizedCode = String(code || "").replace(/\s/g, "");
  const product = sampleProducts[normalizedCode];

  const detailStyle = {
    padding: "12px",
    background: "#eef5fb",
    borderRadius: "8px",
    marginBottom: "10px",
    overflowWrap: "anywhere",
  };

  return (
    <div
      style={{
        maxWidth: "520px",
        margin: "30px auto",
        padding: "24px",
        background: "#eef5fb",
        borderRadius: "18px",
        fontFamily: "Arial, sans-serif",
        color: "#12365a",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "#102d4e",
          color: "white",
          padding: "20px",
          borderRadius: "14px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "26px",
            lineHeight: 1.3,
            margin: "0 0 8px",
            color: "white",
          }}
        >
          HalalNadi
        </h1>
        <h2
          style={{
            fontSize: "19px",
            lineHeight: 1.4,
            margin: 0,
            color: "white",
          }}
        >
          Product Information
        </h2>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "14px",
          marginTop: "20px",
        }}
      >
        <div style={detailStyle}>
          <strong>Barcode / QR Code:</strong>
          <p style={{ marginBottom: 0 }}>{code || "No code available"}</p>
        </div>

        {product ? (
          <>
            <div style={detailStyle}>
              <strong>Product Name:</strong>
              <p>{product.name}</p>
            </div>

            <div style={detailStyle}>
              <strong>Category:</strong>
              <p>{product.category}</p>
            </div>

            <div style={detailStyle}>
              <strong>Manufacturer:</strong>
              <p>{product.manufacturer}</p>
            </div>

            <div style={detailStyle}>
              <strong>Halal Certification Status:</strong>
              <p style={{ color: "#b45309", fontWeight: "bold" }}>
                {product.halalStatus}
              </p>
            </div>
          </>
        ) : (
          <div style={detailStyle}>
            <h3 style={{ fontSize: "17px" }}>Product Not Found</h3>
            <p>
              This product is not currently available in the HalalNadi demo
              database.
            </p>
            <p style={{ fontSize: "13px" }}>
              Please check the barcode number or verify product information
              through official sources.
            </p>
          </div>
        )}
      </div>

      <p
        style={{
          fontSize: "12px",
          lineHeight: 1.7,
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        Demo data only. HalalNadi does not issue or approve halal certification.
        Official halal status must be verified through authorised certification
        sources.
      </p>

      <button
        onClick={onBack}
        style={{
          display: "block",
          width: "100%",
          padding: "13px",
          marginTop: "16px",
          background: "#087cbd",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ← Back
      </button>
    </div>
  );
}
