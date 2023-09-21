import { useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react"

import { CardElement } from "@stripe/react-stripe-js";


const Complete = () => {
  const stripe = useStripe();


  useEffect(() => {
    const confirmCardPayment = async () => {
      const params = new URLSearchParams(window.location.href)
      const paymentTxt = params.get("payment_intent_client_secret")
      console.log(paymentTxt)
      // try {
      //   const { paymentIntent, error } = await stripe.confirmCardPayment(
      //     '{PAYMENT_INTENT_CLIENT_SECRET}',
      //     {
      //       payment_method: {
      //         card: CardElement,
      //         billing_details: {
      //           name: 'Jenny Rosen',
      //           email:"jenny@gmail.com",
      //         },
      //       },
      //     },
      //   );
      //   console.log(paymentIntent)
      // } catch (err) {
      //   console.log(err)
      // }

    }
    stripe && confirmCardPayment()
  }, [])

  return (
    <div>Complete</div>
  )
}

export default Complete