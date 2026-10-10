import { useState } from "react";

function HalalAssistant({ onBack }) {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Welcome to HalalNadi! How can I help you with halal certification today?",
    },
  ]);

  function getAnswer(text) {
    const q = text.toLowerCase();

    if (q.includes("apply") || q.includes("permohonan")) {
      return "To apply for Malaysian halal certification, check your business eligibility, prepare the required documents, and refer to the official MYeHALAL system and current JAKIM guidelines.";
    }

    if (q.includes("document") || q.includes("dokumen")) {
      return "Common documents include business registration, ingredient information, supplier certificates, and relevant operating records. Requirements depend on the certification scheme.";
    }

    if (q.includes("logo") || q.includes("verify")) {
      return "Check halal certification information through official JAKIM resources or the relevant recognised foreign halal certification body. HalalNadi does not issue or approve certificates.";
    }

    if (q.includes("training") || q.includes("latihan")) {
      return "Halal training helps staff understand hygiene, ingredient control, documentation, and halal compliance. Check applicable training requirements for your business.";
    }

    return "Thank you for your question. I can provide general guidance about halal applications, documents, logo verification, and training. Please confirm official requirements with JAKIM or the relevant state authority.";
  }

  function sendMessage() {
    const text = question.trim();
    if (!text) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", text },
      { role: "assistant", text: getAnswer(text) },
    ]);

    setQuestion("");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#eef6fc",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        color: "#164b82",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "auto" }}>
        <button
          type="button"
          onClick={onBack}
          style={{
            background: "#0284c7",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          ← Back to Dashboard
        </button>
        <h1 style={{ textAlign: "center" }}>🤖 HalalNadi AI Assistant</h1>

        <p style={{ textAlign: "center" }}>
          Your Halal Compliance Support Companion
        </p>

        <section
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "24px",
            marginTop: "30px",
            boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              minHeight: "260px",
              maxHeight: "400px",
              overflowY: "auto",
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  background: message.role === "user" ? "#d9f2ff" : "#edf2f7",
                  padding: "14px",
                  borderRadius: "12px",
                  marginBottom: "12px",
                  marginLeft: message.role === "user" ? "15%" : "0",
                  marginRight: message.role === "assistant" ? "15%" : "0",
                  color: "#173b62",
                  lineHeight: "1.5",
                }}
              >
                <strong>{message.role === "user" ? "You" : "HalalNadi"}</strong>
                <p style={{ marginBottom: 0 }}>{message.text}</p>
              </div>
            ))}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <input
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask about halal certification..."
              aria-label="Your halal question"
              style={{
                flex: 1,
                minWidth: 0,
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #cbd5e1",
              }}
            />

            <button
              type="submit"
              style={{
                background: "#0284c7",
                color: "white",
                border: "none",
                borderRadius: "10px",
                padding: "12px 20px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </form>
        </section>

        <p
          style={{
            textAlign: "center",
            fontSize: "13px",
            marginTop: "24px",
          }}
        >
          Demo assistant only. Official halal certification decisions remain
          with the authorised Malaysian authorities.
        </p>
      </div>
    </main>
  );
}

export default HalalAssistant;
