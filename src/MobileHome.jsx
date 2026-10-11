import React from "react";

export default function MobileHome({ onScan, onBack }) {
  const categories = [
    { icon: "🍱", name: "Food & Beverages" },
    { icon: "💄", name: "Cosmetics" },
    { icon: "🧴", name: "Personal Care" },
    { icon: "💊", name: "Health Products" },
  ];

  const demoProducts = [
    {
      icon: "🍪",
      name: "Sample Food Product",
      category: "Food & Beverages",
      description: "Food ingredients and manufacturer information.",
    },
    {
      icon: "💄",
      name: "Sample Cosmetic Product",
      category: "Cosmetics",
      description: "Cosmetic ingredients and product information.",
    },
    {
      icon: "🧴",
      name: "Sample Personal Care Product",
      category: "Personal Care",
      description: "Personal care product details.",
    },
    {
      icon: "💊",
      name: "Sample Health Product",
      category: "Health Products",
      description: "Health product information and references.",
    },
  ];

  return (
    <div
      style={{
        maxWidth: 480,
        margin: "30px auto",
        padding: 24,
        background: "#eef5fb",
        borderRadius: 20,
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        color: "#12365a",
      }}
    >
      <div
        style={{
          background: "#102d4e",
          padding: 24,
          borderRadius: 16,
          color: "white",
        }}
      >
        <h1 style={{ color: "white", fontSize: 30, margin: 0 }}>HalalNadi</h1>
        <p>Mobile Halal Information Assistant</p>
        <h2 style={{ color: "white", fontSize: 22 }}>Product Scanner</h2>
        <p>Scan QR Codes & Product Barcodes</p>
      </div>

      <div
        style={{
          background: "white",
          padding: 20,
          borderRadius: 16,
          marginTop: 20,
        }}
      >
        <h2>Explore Product Categories</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 12,
            marginTop: 20,
          }}
        >
          {categories.map((category) => (
            <div
              key={category.name}
              style={{
                background: "#eef5fb",
                padding: 16,
                borderRadius: 12,
              }}
            >
              <div style={{ fontSize: 32 }}>{category.icon}</div>
              <p style={{ fontWeight: "bold", fontSize: 14 }}>
                {category.name}
              </p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 25 }}>
          <h2 style={{ fontSize: 22 }}>Product Gallery</h2>

          <p style={{ fontSize: 13 }}>
            Explore sample products across different categories.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 12,
            }}
          >
            {demoProducts.map((product) => (
              <div
                key={product.name}
                style={{
                  background: "#eef5fb",
                  padding: 14,
                  borderRadius: 12,
                }}
              >
                <div style={{ fontSize: 42 }}>{product.icon}</div>

                <h3 style={{ fontSize: 15 }}>{product.name}</h3>

                <p style={{ fontWeight: "bold", fontSize: 12 }}>
                  {product.category}
                </p>

                <p style={{ fontSize: 12 }}>{product.description}</p>

                <small>Demo Product</small>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onScan}
          style={{
            width: "100%",
            padding: 15,
            marginTop: 24,
            background: "#087cbd",
            color: "white",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          📷 Scan Product Barcode / QR Code
        </button>
      </div>

      <p style={{ fontSize: 13, marginTop: 20 }}>
        HalalNadi helps users explore product information. Official halal
        certification must be verified through authorised certification sources.
      </p>

      <button onClick={onBack}>← Back to Dashboard</button>
    </div>
  );
}
