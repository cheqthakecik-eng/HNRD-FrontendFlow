import { useState } from "react";
import Welcome from "./welcome.jsx";
import Dashboard from "./Dashboard.jsx";
import HalalAssistant from "./HalalAssistant.jsx";
import CertificateLibrary from "./CertificateLibrary.jsx";
import LogoVerification from "./LogoVerification.jsx";
import HalalNews from "./HalalNews.jsx";

function HalalFlow() {
  const [page, setPage] = useState("welcome");

  if (page === "assistant") {
    return <HalalAssistant onBack={() => setPage("dashboard")} />;
  }
  if (page === "certificates") {
    return <CertificateLibrary onBack={() => setPage("dashboard")} />;
  }

  if (page === "verification") {
    return <LogoVerification onBack={() => setPage("dashboard")} />;
  }

  if (page === "news") {
    return <HalalNews onBack={() => setPage("dashboard")} />;
  }

  if (page === "dashboard") {
    return (
      <Dashboard
        onOpenAssistant={() => setPage("assistant")}
        onOpenCertificates={() => setPage("certificates")}
        onOpenVerification={() => setPage("verification")}
        onOpenNews={() => setPage("news")}
      />
    );
  }

  return (
    <div>
      <Welcome onExplore={() => setPage("dashboard")} />
    </div>
  );
}

export default HalalFlow;
