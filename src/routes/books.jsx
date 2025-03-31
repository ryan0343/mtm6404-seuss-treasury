import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Nav } from "../components/Nav";

export const Books = () => {
    const [books, setbooks] = useState([]);

    // fetch books data and set in state
    useEffect(() => {
        fetch('https://seussology.info/api/books')
        .then((response) => response.json())
        .then((data) => setbooks(data))
        .catch((error) => console.error('Error fetching books:', error));;
    }, []);

    return (
        <>
            {/* Can create a Nav Component to */}
            <Nav/>
            <h1>Seussology</h1>
            <div className="booksContainer">
                {books.map((book) => {
                    return (
                        <div className="homeimg" key={book.id}>
                        <Link to={`/book/${book.id}`}>
                            <img className="homeimg" src={book.image} alt="" />
                        </Link>
                    </div>
                    )
                })}
            </div>
        </>
    );
}

export default Books;