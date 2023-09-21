import { useStripe, useElements } from "@stripe/react-stripe-js";

import axios from "axios";
import { useEffect,useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret,setClientSecret] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault();

    let element = null;
    let clientSecret = null
    let paymentElement = null

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

      clientSecret = data?.clientSecret;

      element = stripe.elements({ clientSecret });
      paymentElement = element.create("payment");
      paymentElement.mount("#payment-element");
      setClientSecret(clientSecret)
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


   
    // const {paymentIntent} = await stripe.confirmCardPayment(clientSecret,{
    //   payment_method:{
    //     card:element
    //   },
    //   billing_details: {
    //         name: "faraz ahmed",
    //       },
    //   return_url:"http://127.0.0.1:3001/payment/complete",
    // })

    // console.log(paymentIntent)

    // if (paymentResult.paymentIntent.status === "succeeded") {
    //   console.log(paymentResult);
    //   alert("payment made successfully!");
    // }

  };

  useEffect(() => {
    const confirmPayment = async () =>  {
      const { error, paymentIntent } = await stripe.confirmPayment({
         //elements: element,
        confirmParams: {
          return_url: `http://127.0.0.1:3001/payment/complete`,
        },
        clientSecret
      });
  
      if (error) {
        console.log(
          "failed to redirect page or complete page is not made yet",
          error
        );
      }
  
      console.log(paymentIntent)
    }

    clientSecret && confirmPayment()
  },[clientSecret])
  
  

  return (
    <>
      <h1>Make a Payment</h1>
      <form onSubmit={handleSubmit} id="payment-form">
        {/* <CardElement /> */}

          <div style={{ width: "500px" }} id="payment-element"></div>
        <button disabled={!stripe}>Submit</button>
      </form>
    </>
  );
};

export default CheckoutForm;
