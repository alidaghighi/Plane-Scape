import { useEffect } from "react";

import "./App.css";
import Router from "./components/router";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "Plane Scape";
  }, []);
  return (
    <BrowserRouter>
      <div className="mt-5">
        <Header />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
