import { useState } from "react";

const news = [
  {
    id: 1,
    category: "Halal Certification",
    title: "Malaysia Halal Certification",
    description:
      "Learn about Malaysia's halal certification system and official application requirements.",
    source: "JAKIM",
    url: "https://www.halal.gov.my/",
  },
  {
    id: 2,
    category: "Halal Industry",
    title: "Halal Industry Development",
    description:
      "Explore information about Malaysia's halal industry, business opportunities and development programmes.",
    source: "HDC",
    url: "https://hdcglobal.com/",
  },
  {
    id: 3,
    category: "Training & Awareness",
    title: "Halal Training and Awareness",
    description:
      "Discover halal awareness, compliance and training information for businesses and entrepreneurs.",
    source: "JAKIM",
    url: "https://www.islam.gov.my/",
  },
];

function HalalNews({ onBack }) {
  const [search, setSearch] = useState("");

  const filteredNews = news.filter((item) =>
    `${item.title} ${item.category} ${item.description}`
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
      <div style={{ textAlign: "center" }}>
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

        <h1>📰 Halal News & Training</h1>
        <p>Stay informed about halal industry and training resources</p>
      </div>

      <section
        style={{
          maxWidth: "950px",
          margin: "35px auto",
        }}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search halal news or training..."
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "15px",
            border: "1px solid #cbd5e1",
            borderRadius: "10px",
            marginBottom: "25px",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredNews.map((item) => (
            <article
              key={item.id}
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "16px",
                boxShadow: "0 5px 18px rgba(0,0,0,0.07)",
              }}
            >
              <p style={{ color: "#0284c7", fontWeight: "bold" }}>
                {item.category}
              </p>

              <h2 style={{ color: "#123b63" }}>{item.title}</h2>

              <p style={{ lineHeight: "1.6" }}>{item.description}</p>

              <p>
                <strong>Source:</strong> {item.source}
              </p>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "#0284c7",
                  color: "white",
                  padding: "11px 18px",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Visit Source ↗
              </a>
            </article>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <p style={{ textAlign: "center" }}>No matching resources found.</p>
        )}
      </section>

      <p style={{ textAlign: "center", fontSize: "13px" }}>
        HalalNadi provides informational resources only. Certification decisions
        remain with the relevant authorities.
      </p>
    </main>
  );
}

export default HalalNews;
