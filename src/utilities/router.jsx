import { Book } from "../routes/book.jsx";
import { Books } from "../routes/books.jsx";
import { Quotes } from "../routes/quotes.jsx";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Books/>,
    },
    {
        path: '/quotes',
        element: <Quotes />,
    },
    // Dynamic Route
    {
        path: '/book/:id',
        element: <Book /> ,
    }
]);

export default router;
