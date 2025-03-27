import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="241541654071-4neqmtdh6bdano7foo5rafbl9bf7dea9.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    ;
  </StrictMode>
);
