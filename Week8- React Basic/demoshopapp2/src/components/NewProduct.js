import { useState } from "react";

function NewProduct(props) {

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);
        // console.log(newTitle);
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
        // console.log(date);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const productData = {
            title: newTitle,
            date: newDate
        }

        // console.log(productData);
        // Lifting-Up: calling parent function-->>
        props.child(productData);

        setDate('');
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label for="title">Title:</label>
                <input type="text" value={newTitle} onChange={titleChangeHandler}></input>
            </div>

            <div>
                <lable for="date">Date:</lable>
                <input type="date" value={newDate} min="2023-01-01" max="2024-12-31" onChange={dateChangeHandler}></input>
            </div>
            <div>
                <button type="submit">Add Product</button>
            </div>
        </form>
    )
}

export default NewProduct;