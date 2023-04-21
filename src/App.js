import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        setBooks(
            [...books,
                 { 
                    id: Math.round(Math.random() * 9999),
                    title: title 
                }
            ]);
    }

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })

        setBooks(updatedBooks);
    }

    const editBookById = (id, title) => {
        const bookIndex = books.findIndex(book => book.id === id);
        const newBooks = [...books];
        newBooks[bookIndex].title = title
        setBooks(newBooks);
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    )
};

export default App;
