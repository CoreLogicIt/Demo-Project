import { useEffect, useState, useContext } from "react";

import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import Checkout from "../checkout/Checkout";

import { PackagesContext } from "../../../context/packages/packages.context";

const stripePromise = loadStripe(
  "pk_test_51NroDlJbGmGwd4KWyRTs6JIXMp72PgPDjY3UzGI06j3mzOGgIPTy5JQbdHCj8OiuqSJkZdsQqNyRA8aXdXKQlFsz00pOLZLQfL"
);

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState(null);

  const { userChoosenPackage } = useContext(PackagesContext);

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const resp = await fetch(
          "https://localhost:7088/client/paymentinstant",
          {
            method: "post",
            body: JSON.stringify({
              amount: userChoosenPackage
                ? userChoosenPackage.price * 100
                : 2 * 100,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await resp.json();

        setClientSecret(data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    fetchClientSecret();
  }, [userChoosenPackage]);

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
