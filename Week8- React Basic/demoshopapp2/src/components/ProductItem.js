import React, {useState} from 'react';
import Card from "./Card";
import ProductDate from "./ProductDate";
import './ProductItem.css';


const ProductItem = (props) => {

    const [currTitle, changeTitle] = useState(props.title);
    function handleButton(event) {
        changeTitle(0);
        console.log("cilck hua");
    };
    
    return (
        <Card className='product-item'>
            <ProductDate date={props.date} />
            <div className='product-item__description'>
                <h2>{currTitle}</h2>
            </div>

            <button onClick={handleButton}>Add To Cart</button>
        </Card>
    );
}

export default ProductItem;