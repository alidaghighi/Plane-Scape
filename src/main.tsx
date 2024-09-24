import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as JotaiProvider } from "jotai";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import App from "./App.tsx";
import "./index.css";
// import { LocalizationProvider } from "@mui/x-date-pickers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <JotaiProvider>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
        <App />
      {/* </LocalizationProvider> */}
    </JotaiProvider>
  </StrictMode>
);
