import { useElements, useStripe } from "@stripe/react-stripe-js";
import {lazy,Suspense} from "react";

import { PaymentElement } from "@stripe/react-stripe-js";

const SinglePackage = lazy(() => import("../packages/SinglePackage")) 

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://127.0.0.1:3001/payment/complete`,
        shipping: {
          name: "Danerys Targaryan",
          phone: "34325434",
          address: {
            country: "Pakistan",
          },
        },
        receipt_email: "weba6008@gmail.com",
      },
    });

    if (paymentIntent && paymentIntent.status === "succeeded") {
      console.log(done);
    }

    if (error) console.log("oops");
  };

  return (
    <div>
      <form id="payment-form" onSubmit={handlePayment}>
        <PaymentElement />
        <button>submit</button>
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "2em 0",
        }}
      >
        <Suspense fallback={<div>loading</div>}>
        <SinglePackage />
        </Suspense>
      </div>
    </div>
  );
};

export default Checkout;
