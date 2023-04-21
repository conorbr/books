import { useState } from "react"

function BookEdit({book, onEdit, toggleShowEdit}) {
    const [title, setTitle] = useState(book.title)

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onEdit(book.id, title);
        toggleShowEdit();
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label> Title </label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button button-is-primary">
                Save
            </button>
        </form>
    )
}

export default BookEdit