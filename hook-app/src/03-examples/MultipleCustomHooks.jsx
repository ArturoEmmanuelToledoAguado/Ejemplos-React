import { useCounter,useFetch } from "../hooks";
import { LoadingQuote,Quote } from "./";

export const MultipleCustomHooks = () => {
    const{counter,increment} = useCounter(1);

    const {data,isLoading,hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author,quote} = !!data &&data[0];

    //console.log({data,isLoading,hasError});

  return (
    <>
        <h1>BrakinBad Qotes</h1>
        <hr/>

        {
            isLoading
            ?
                <LoadingQuote/>
            :
                <Quote quote={quote} author={author}/> 
        }

        <button className="btn btn-primary" onClick={()=>increment()}>
            Next quote
        </button>
    </>
  )
}