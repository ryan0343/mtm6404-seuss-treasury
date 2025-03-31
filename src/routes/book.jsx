import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "../components/Nav";

export const Book = () => {

    const [book, setBook] = useState(null);

    const params = useParams();

    useEffect(() => {
        fetch(`https://seussology.info/api/books/${params.id}`)
        .then((response) => response.json())
        .then((data) => setBook(data))
        .catch((error) => console.error("Error fetching book:", error));
    }, [params.id]);

    if (!book) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Nav/>
            {/* ? checks if the value is null */}
            <h1>{book?.title}</h1>
            <img src={book?.image} className="homeimg"/>
            <p>
                <strong>Year: </strong>{book.year_published}
            </p>
            <p>
                <strong>Description: </strong>{book.description}
            </p>
        </>
    )
}