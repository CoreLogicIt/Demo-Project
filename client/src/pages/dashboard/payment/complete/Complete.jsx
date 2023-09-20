import { useEffect } from "react"


const Complete = () => {


  useEffect(() => {
   const params = new URLSearchParams(window.location.href)
   console.log(params.get("payment_intent_client_secret"))
  },[])

  return (
    <div>Complete</div>
  )
}

export default Complete