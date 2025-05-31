import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";

try {
  if (!customElements.get("autosize-textarea")) {
    // Normally the library registers it — we just avoid double registration
  }
} catch (e) {
  console.log("autosize-textarea already registered:", e);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>
);
