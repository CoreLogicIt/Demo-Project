import { useStripe, useElements } from "@stripe/react-stripe-js";

import axios from "axios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let element = null;

    if (!stripe || !elements) {
      return;
    }

    try {
      const { data } = await axios.post(
        "https://localhost:7088/client/paymentinstant",
        {
          amount: 100,
        }
      );

      console.log(`data: ${data}`);

      const clientSecret = data?.clientSecret;

      element = stripe.elements({ clientSecret });
      const paymentElement = element.create("payment");
      paymentElement.mount("#payment-element");
    } catch (err) {
      console.log(err);
    }

    // const paymentResult = await stripe.confirmCardPayment(clientSecret, {
    //   payment_method: {
    //     card: elements.getElement(CardElement),
    //     billing_details: {
    //       name: "faraz ahmed",
    //     },
    //   },
    // });

    const { error } = await stripe.confirmPayment({
      elements: element,
      confirmParams: {
        return_url: "http://127.0.0.1/3001/complete",
      },
    });

    if (error) {
      console.log(
        "failed to redirect page or complete page is not made yet",
        error
      );
    }

    // if (paymentResult.paymentIntent.status === "succeeded") {
    //   console.log(paymentResult);
    //   alert("payment made successfully!");
    // }
  };

  return (
    <>
      <h1>Make a Payment</h1>
      <form onSubmit={handleSubmit}>
        {/* <CardElement /> */}
        <form action="" id="payment-form">
          <div id="payment-element"></div>
        </form>
        <button disabled={!stripe}>Submit</button>
      </form>
    </>
  );
};

export default CheckoutForm;
