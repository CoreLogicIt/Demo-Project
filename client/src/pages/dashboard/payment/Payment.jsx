import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import Checkout from "../checkout/Checkout";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51NroDlJbGmGwd4KWyRTs6JIXMp72PgPDjY3UzGI06j3mzOGgIPTy5JQbdHCj8OiuqSJkZdsQqNyRA8aXdXKQlFsz00pOLZLQfL"
);

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const { data } = axios.post(
          "https://localhost:7088/client/paymentinstant",
          {
            amount: 1000,
          },
          {
            withCredentials: true,
          }
        );

        console.log(data?.clientSecret);
        setClientSecret(
          "pi_3NsvngJbGmGwd4KW1Bq35zER_secret_383L7QIl6E2lyH4J4IFZlnjH1"
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchClientSecret();
  }, []);

  return (
    <>
      <h1>Make a Payment</h1>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <Checkout />
        </Elements>
      )}
    </>
  );
};

export default CheckoutForm;
