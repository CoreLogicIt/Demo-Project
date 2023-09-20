import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
// import { ThemeContextProvider } from './context/theme/theme.context.jsx'

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NroDlJbGmGwd4KWyRTs6JIXMp72PgPDjY3UzGI06j3mzOGgIPTy5JQbdHCj8OiuqSJkZdsQqNyRA8aXdXKQlFsz00pOLZLQfL');

import { QueryClientProvider, client } from "./utils/query.config.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise} > 
  <QueryClientProvider client={client} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
  </Elements>
);
