import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
// import { ThemeContextProvider } from './context/theme/theme.context.jsx'


import { QueryClientProvider, client } from "./utils/query.config.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
