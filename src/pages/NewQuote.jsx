import QuoteForm from '../components/quotes/QuoteForm'
import { useHistory } from 'react-router-dom'
const NewQuote = () =>{

    const history=useHistory();

    const addQuotesHandler = quoteData =>{
        console.log(quoteData)
        history.push('/quotes')
    }
    return(
        <QuoteForm onAddQuote={addQuotesHandler}/>
    )
}
export default NewQuote;