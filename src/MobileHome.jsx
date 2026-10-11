import React, { useState } from "react";

const categories = [
  {
    name: "Food Products",
    icon: "🍜",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=700",
    description: "Food, snacks, sauces and packaged products",
  },
  {
    name: "Beverages",
    icon: "🥤",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=700",
    description: "Milk, coffee, juice and other beverages",
  },
  {
    name: "Cosmetics",
    icon: "💄",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700",
    description: "Makeup, skincare and beauty products",
  },
  {
    name: "Personal Care",
    icon: "🧴",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700",
    description: "Soap, shampoo and hygiene products",
  },
  {
    name: "Health & Supplements",
    icon: "💊",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=700",
    description: "Vitamins, supplements and nutrition",
  },
  {
    name: "Ingredients & Manufacturing",
    icon: "🏭",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700",
    description: "Raw materials and manufacturing ingredients",
  },
];

const demoProducts = [
  {
    name: "Sample Food Product",
    category: "Food Products",
    icon: "🍪",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500",
    description: "Food ingredients and manufacturer information.",
  },
  {
    name: "Sample Beverage Product",
    category: "Beverages",
    icon: "🥤",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500",
    description: "Beverage ingredients and manufacturer information.",
  },
  {
    name: "Sample Cosmetic Product",
    category: "Cosmetics",
    icon: "💄",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
    description: "Cosmetic ingredients and product information.",
  },
  {
    name: "Sample Personal Care Product",
    category: "Personal Care",
    icon: "🧴",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500",
    description: "Personal care product details.",
  },
  {
    name: "Sample Health & Supplements",
    category: "Health & Supplements",
    icon: "💊",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500",
    description: "Health product information and references.",
  },
  {
    name: "Sample Manufacturing Ingredient",
    category: "Ingredients & Manufacturing",
    icon: "🏭",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500",
    description: "Raw materials, supplier and ingredient information.",
  },
];

export default function MobileHome({ onScan, onBack }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const visibleProducts =
    selectedCategory === "All"
      ? demoProducts
      : demoProducts.filter((product) => product.category === selectedCategory);

  const cardStyle = {
    background: "#f0f6fb",
    border: "1px solid #e1eaf3",
    borderRadius: 14,
    overflow: "hidden",
    cursor: "pointer",
    textAlign: "left",
    color: "#12365a",
  };

  const imageStyle = {
    width: "100%",
    height: 120,
    objectFit: "cover",
    display: "block",
  };

  return (
    <div
      style={{
        maxWidth: 960,
        margin: "24px auto",
        padding: 20,
        background: "#eef5fb",
        borderRadius: 20,
        fontFamily: "Arial, sans-serif",
        color: "#12365a",
      }}
    >
      <header
        style={{
          background: "linear-gradient(120deg, #102d4e, #075b91)",
          color: "white",
          padding: 28,
          borderRadius: 18,
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "white", margin: 0 }}>HalalNadi</h1>
        <p>Mobile Halal Information Assistant</p>
        <h2 style={{ color: "white" }}>Product Scanner</h2>
        <p>Scan QR Codes & Product Barcodes</p>
      </header>

      <main
        style={{
          background: "white",
          borderRadius: 18,
          padding: 20,
          marginTop: 20,
        }}
      >
        <h2 style={{ textAlign: "center" }}>Explore Product Categories</h2>

        <p style={{ textAlign: "center" }}>
          Browse products and explore halal-related information.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 14,
          }}
        >
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              onClick={() => {
                setSelectedCategory(category.name);
                setSelectedProduct(null);
              }}
              style={{
                ...cardStyle,
                padding: 0,
                border:
                  selectedCategory === category.name
                    ? "3px solid #087cbd"
                    : "1px solid #e1eaf3",
              }}
            >
              <img
                src={category.image}
                alt={category.name}
                style={imageStyle}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div style={{ padding: 12 }}>
                <div style={{ fontSize: 25 }}>{category.icon}</div>
                <strong>{category.name}</strong>
                <p style={{ fontSize: 12, lineHeight: 1.5 }}>
                  {category.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        <section style={{ marginTop: 30 }}>
          <h2 style={{ textAlign: "center" }}>Product Gallery</h2>

          <p style={{ textAlign: "center", fontSize: 13 }}>
            Explore sample products across different categories.
          </p>

          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSelectedProduct(null);
            }}
            style={{
              padding: "9px 16px",
              background: "#102d4e",
              color: "white",
              border: "none",
              borderRadius: 9,
              cursor: "pointer",
              marginBottom: 16,
            }}
          >
            View All Products
          </button>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 14,
            }}
          >
            {visibleProducts.map((product) => (
              <button
                type="button"
                key={product.name}
                onClick={() => setSelectedProduct(product)}
                style={{ ...cardStyle, padding: 0 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={imageStyle}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <div style={{ padding: 12 }}>
                  <div style={{ fontSize: 24 }}>{product.icon}</div>
                  <h3 style={{ fontSize: 15, margin: "8px 0" }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: 12 }}>{product.category}</p>
                  <small>Demo Product · View Details →</small>
                </div>
              </button>
            ))}
          </div>
        </section>

        {selectedProduct && (
          <section
            style={{
              background: "#eef5fb",
              padding: 18,
              borderRadius: 14,
              marginTop: 20,
            }}
          >
            <h3>{selectedProduct.name}</h3>
            <p>
              <strong>Category:</strong> {selectedProduct.category}
            </p>
            <p>{selectedProduct.description}</p>
            <p>
              <strong>Halal Status:</strong> Not verified
            </p>
            <p style={{ fontSize: 12 }}>
              Demonstration information only. Check official certification
              records for verification.
            </p>
            <button type="button" onClick={() => setSelectedProduct(null)}>
              Close Details
            </button>
          </section>
        )}

        <button
          type="button"
          onClick={onScan}
          style={{
            width: "100%",
            padding: 16,
            marginTop: 25,
            background: "#087cbd",
            color: "white",
            border: "none",
            borderRadius: 12,
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          📷 Scan Product Barcode / QR Code
        </button>
      </main>

      <p
        style={{
          textAlign: "center",
          fontSize: 13,
          lineHeight: 1.7,
          marginTop: 20,
        }}
      >
        HalalNadi helps users explore product information. Official halal
        certification must be verified through authorised certification sources.
      </p>

      <div style={{ textAlign: "center" }}>
        <button type="button" onClick={onBack}>
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}
