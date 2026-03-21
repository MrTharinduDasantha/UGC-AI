import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/react";
import { dark } from "@clerk/themes";
import "./index.css";

// Import clerk publishable key
const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!CLERK_PUBLISHABLE_KEY) throw new Error("Missing clerk publishable key");

createRoot(document.getElementById("root")! as HTMLElement).render(
  <ClerkProvider
    appearance={{
      theme: dark,
      variables: {
        colorPrimary: "#4f39f6",
        colorTextOnPrimaryBackground: "#ffffff",
      },
    }}
    publishableKey={CLERK_PUBLISHABLE_KEY}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>,
);
