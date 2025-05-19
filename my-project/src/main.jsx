import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CartProvider } from "./Component/Pages/Cart/Context/CartProvider.jsx";
import i18n from "./i18n.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="241541654071-4neqmtdh6bdano7foo5rafbl9bf7dea9.apps.googleusercontent.com">
      <CartProvider>
        <App />
      </CartProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
