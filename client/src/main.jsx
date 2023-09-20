import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
// import { ThemeContextProvider } from './context/theme/theme.context.jsx'

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51MYkTLALrjdA4aW4930DtUbITAjULahvthDzGccF7hOOSc5eVM6W7m2lNnYRtIfEwMphKqNjpgtrIEbA2j2ym5UN00QtENKIOE');

import { QueryClientProvider, client } from "./utils/query.config.js";

const options = {
  // passing the client secret obtained from the server
  clientSecret: "sk_test_51MYkTLALrjdA4aW4nfcAuUyyCvuZDKp9So8gqSHLSagaQVHMpv3UyI05QCtkJI0TGlDaXni0erheTrr2IpiIofB800JnpwYnha",
};


ReactDOM.createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise} > 
  <QueryClientProvider client={client} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
  </Elements>
);
