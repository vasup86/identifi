import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Networks, XRPLClient } from "@nice-xrpl/react-xrpl";

createRoot(document.getElementById("root")).render(
  <XRPLClient network={Networks.Testnet}>
    <App />
  </XRPLClient>
);
