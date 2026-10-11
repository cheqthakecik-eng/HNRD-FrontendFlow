import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import ProductInformation from "./ProductInformation";

export default function HalalVerify({ onBack }) {
  const [result, setResult] = useState("");
  const [manualCode, setManualCode] = useState("");
  const [error, setError] = useState("");
  const scannerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let scanner;

    async function startScanner() {
      try {
        scanner = new Html5Qrcode("halal-qr-reader", {
          formatsToSupport: [
            0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
          ],
          verbose: false,
        });

        scannerRef.current = scanner;

        await scanner.start(
          { facingMode: "environment" },
          {
            fps: 10,
            qrbox: (width, height) => ({
              width: Math.min(320, Math.floor(width * 0.85)),
              height: Math.min(160, Math.floor(height * 0.5)),
            }),
          },
          (decodedText) => {
            if (!cancelled) {
              console.log("Barcode detected:", decodedText);
              setResult(decodedText);
            }
          },
          () => {},
        );

        if (cancelled && scanner.isScanning) {
          await scanner.stop();
        }
      } catch (err) {
        console.error("Scanner error:", err);
        if (!cancelled) {
          setError("Camera could not start. Check camera permission.");
        }
      }
    }

    startScanner();

    return () => {
      cancelled = true;

      if (scannerRef.current?.isScanning) {
        scannerRef.current.stop().catch(() => {});
      }
    };
  }, []);

  if (result) {
    return <ProductInformation code={result} onBack={onBack} />;
  }

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "30px auto",
        padding: 20,
        background: "#eef5fb",
        borderRadius: 18,
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        color: "#12365a",
      }}
    >
      <h1 style={{ fontSize: 28 }}>HalalNadi Product Scanner</h1>

      <p>Scan Product Barcode or QR Code</p>

      <div
        id="halal-qr-reader"
        style={{
          width: "100%",
          background: "white",
          borderRadius: 12,
          overflow: "hidden",
        }}
      />

      {error && <p style={{ color: "#b91c1c" }}>{error}</p>}

      <div
        style={{
          background: "white",
          padding: 18,
          borderRadius: 12,
          marginTop: 20,
        }}
      >
        <h3>Manual Barcode Search</h3>
        <p style={{ fontSize: 13 }}>
          Enter a product barcode if scanning is unavailable.
        </p>

        <input
          type="text"
          value={manualCode}
          onChange={(e) => setManualCode(e.target.value)}
          placeholder="Enter barcode number"
          style={{
            width: "90%",
            padding: 12,
            border: "1px solid #ccc",
            borderRadius: 8,
            marginBottom: 12,
          }}
        />

        <button
          onClick={() => {
            if (manualCode.trim()) {
              setResult(manualCode.trim());
            }
          }}
          style={{
            padding: "12px 20px",
            background: "#087cbd",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Search Product
        </button>
      </div>

      <p style={{ fontSize: 12, marginTop: 18 }}>
        Barcode identification does not confirm halal certification. Verify
        halal status through official sources.
      </p>

      <button
        onClick={onBack}
        style={{
          marginTop: 15,
          padding: "10px 18px",
          cursor: "pointer",
        }}
      >
        ← Back to Mobile Home
      </button>
    </div>
  );
}
