import { useEffect, useState } from "react"
import { Nav } from "../components/Nav";

export const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    console.log("quotes is working");

    // fetch quotes data and set in state
    useEffect(() => {
        fetch('https://seussology.info/api/quotes/random/10')
        .then((response) => response.json())
        .then((data) => setQuotes(data))
        .catch((error) => console.error('Error fetching quotes:', error));;
    }, []);

    console.log(quotes);

    return (
        <>
            <Nav/>
            {/* Can create a Nav Component to */}
            <h1>Seussology</h1>
            <div className="quotesContainer">
                {quotes.map((quote) => {
                    return (
                        <div className="quote" key={quote.id}>
                            <p className="quoteText">{quote.text}</p>
                            <p className="quoteSource"> - {quote.book.title}</p>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Quotes;