import { useStripe, useElements } from "@stripe/react-stripe-js";
import StripeCheckout from "react-stripe-checkout";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const STRIPE_KEY =
"pk_test_51NroDlJbGmGwd4KWyRTs6JIXMp72PgPDjY3UzGI06j3mzOGgIPTy5JQbdHCj8OiuqSJkZdsQqNyRA8aXdXKQlFsz00pOLZLQfL";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let element = null;
    let clientSecret = null 
    if (!stripe || !elements) {
      return;
    }
    try {
      const { data } = await axios.post(
        "https://localhost:7088/Client/paymentinstant",
        {
          amount: 100,
        }
      );

      clientSecret = data?.clientSecret;

      element = stripe.elements({ clientSecret });
      const paymentElement = element.create("payment");
      paymentElement.mount("#payment-element");
    } catch (err) {
      console.log(err);
    }

  //   // const paymentResult = await stripe.confirmCardPayment(clientSecret, {
  //   //   payment_method: {
  //   //     card: elements.getElement(CardElement),
  //   //     billing_details: {
  //   //       name: "faraz ahmed",
  //   //     },
  //   //   },
  //   // });

    const { error,paymentIntent } = await stripe.confirmPayment({
      elements: element,
      confirmParams: {
        return_url: "http://127.0.0.1:3001/payment/complete",
      },
      clientSecret:clientSecret
    });

    if (error) {
      console.log(
        "failed to redirect page or complete page is not made yet",
        error
      );
    }

    console.log(paymentIntent)

}

  const onToken = async (token) => {
    setStripeToken(token);
  };

  // useEffect(() => {
  //   const makePayment = async () => {
  //     try {
  //       const { data } = await axios.post(
  //         "https://localhost:7088/client/paymentinstant",
  //         {
  //           tokenId: stripeToken.id,
  //           amount: 5 * 100,
  //         }
  //       );
  //       console.log(data)
  //       navigate("/payment/complete");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   stripeToken && makePayment();
  // }, [stripeToken]);

  return (
    <>
      <h1>Make a Payment</h1>
      <form onSubmit={handleSubmit} id="payment-form">
        {/* <CardElement /> */}
          <div id="payment-element"></div>
        {/* <div style={{width:"100%"}}> */}
      <button disabled={!stripe}>Pay</button>
      </form>
    </>
  );
};

export default CheckoutForm;
