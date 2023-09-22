import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { PackageContextProvider } from "./context/packages/packages.context.jsx";

// import { ThemeContextProvider } from './context/theme/theme.context.jsx'


// import { QueryClientProvider, client } from "./utils/query.config.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <PackageContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PackageContextProvider>
);
