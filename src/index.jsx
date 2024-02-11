import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Counter from "./Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div style={{ color: "grey" }}>
      <div className="w-100">
        <Header />
        <Counter />
      </div>
    </div>
  </React.StrictMode>
);
