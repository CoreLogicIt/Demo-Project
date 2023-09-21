import { useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

import { PaymentElement } from "@stripe/react-stripe-js";

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
        },
      });

      if (paymentIntent && paymentIntent.status === "succeeded") {
        console.log(done);
      }

      if(error) console.log("oops")
   
  };

  return (
    <div>
      <form id="payment-form" onSubmit={handlePayment}>
        <PaymentElement />
        <button>submit</button>
        {/* <div id='payment-message'></div> */}
      </form>
    </div>
  );
};

export default Checkout;
