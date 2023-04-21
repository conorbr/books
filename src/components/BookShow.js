import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow( { book, onDelete, onEdit }) {

    const [showEdit, setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleDeleteClick = () => {
        onDelete(book.id);
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit onEdit={onEdit} toggleShowEdit={handleEditClick} book={book} />;
    }

    return (
    <div className="book-show">
        <img 
            alt="books"
            src={`https://picsum.photos/seed/${book.id}/200/300`}
        />
        {content}
        <div className="actions">
            <button  className="edit" onClick={handleEditClick}> Edit </button>
            <button className="delete" onClick={handleDeleteClick}>Delete</button>
        </div>
    </div>
    )
}

export default BookShow