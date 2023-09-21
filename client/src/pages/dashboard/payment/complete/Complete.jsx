// import { useElements, useStripe } from "@stripe/react-stripe-js";
// import { useEffect } from "react"

// import { CardElement } from "@stripe/react-stripe-js";


const Complete = () => {
  // const stripe = useStripe();
  // const elements = useElements()


  // useEffect(() => {
  //   const confirmCardPayment = async () => {
  //     const params = new URLSearchParams(window.location.href)
  //     const paymentTxt = params.get("payment_intent_client_secret")
  //     if(stripe && paymentTxt){
  //     try {
  //       const {error,paymentIntent } = await stripe?.confirmCardPayment(
  //         paymentTxt,
  //         {
  //           payment_method: {
  //             card: elements.getElement(CardElement),
  //             billing_details: {
  //               name: 'Jenny Rosen',
  //               email:"jenny@gmail.com",
  //             },
  //           },
  //         },
  //       );
  //       console.log("hello")
  //       console.log(paymentIntent)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  //   }
  //   stripe & elements && confirmCardPayment()
  //   // const params = new URLSearchParams(window.location.href)
  //   // const paymentTxt = params.get("payment_intent_client_secret")
  //   // console.log(paymentTxt)
  // },[stripe,elements])

  return (
    <div>Complete</div>
  )
}

export default Complete