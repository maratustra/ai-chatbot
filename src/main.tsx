import "@fontsource/dm-sans/400.css" // Regular
import "@fontsource/dm-sans/500.css" // Medium
import "@fontsource/dm-sans/700.css" // Bold
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
