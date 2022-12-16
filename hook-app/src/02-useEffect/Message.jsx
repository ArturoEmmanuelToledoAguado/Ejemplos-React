import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
      console.log('Message Mounted')
    
      return () => {
        console.log('Message UnMonted')
      }
    }, [])
    

  return (
    <>
        <h1>Usuario ya existe</h1>
    </>
  )
}