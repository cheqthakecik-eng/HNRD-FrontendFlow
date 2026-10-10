function Dashboard({
  onOpenAssistant,
  onOpenCertificates,
  onOpenVerification,
  onOpenNews,
}) {
  const features = [
    {
      icon: "🤖",
      title: "AI Halal Assistant",
      description: "Get guidance on halal compliance and documentation.",
    },
    {
      icon: "📜",
      title: "Certificate Library",
      description: "Explore halal certification information.",
    },
    {
      icon: "🔍",
      title: "Logo Verification",
      description: "Check halal logos and certification references.",
    },
    {
      icon: "📰",
      title: "News & Training",
      description: "Discover halal news, updates and training.",
    },
  ];

  const handleFeatureClick = (title) => {
    if (title === "AI Halal Assistant") {
      onOpenAssistant();
    } else if (title === "Certificate Library") {
      onOpenCertificates();
    } else if (title === "Logo Verification") {
      onOpenVerification();
    } else if (title === "News & Training") {
      onOpenNews();
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#eef6fc",
        fontFamily: "'Poppins', Arial, sans-serif",
        padding: "40px 24px",
        boxSizing: "border-box",
        color: "#173b62",
      }}
    >
      <header
        style={{
          background: "#164b82",
          color: "white",
          padding: "25px",
          borderRadius: "16px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "white" }}>HalalNadi Dashboard</h1>
        <p>Your AI-Powered Halal Business Companion</p>
      </header>

      <section
        style={{
          maxWidth: "1100px",
          margin: "40px auto",
        }}
      >
        <h2 style={{ color: "#164b82" }}>Explore Our Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          {features.map((feature) => (
            <article
              key={feature.title}
              onClick={() => handleFeatureClick(feature.title)}
              style={{
                background: "white",
                padding: "30px 20px",
                borderRadius: "16px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "42px" }}>{feature.icon}</div>
              <h3 style={{ color: "#164b82" }}>{feature.title}</h3>
              <p style={{ color: "#52677b" }}>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: "center" }}>RHYNO DEVS | HalalNadi</footer>
    </main>
  );
}

export default Dashboard;
