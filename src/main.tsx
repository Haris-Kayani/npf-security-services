import { createRoot } from "react-dom/client";
import "@fontsource/roboto/latin-400.css";
import "@fontsource/roboto/latin-500.css";
import "@fontsource/roboto/latin-700.css";
import "@fontsource/roboto-condensed/latin-400.css";
import "@fontsource/roboto-condensed/latin-600.css";
import "@fontsource/roboto-condensed/latin-700.css";
import "@fontsource/roboto-condensed/latin-800.css";
import { HomePage } from "./pages/HomePage";
import "./styles/tokens.css";
import "./styles/global.css";

const root = document.getElementById("root");
if (!root) throw new Error("The application root element is missing.");

createRoot(root).render(<HomePage />);
