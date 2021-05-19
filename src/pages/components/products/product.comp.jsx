import React from 'react';

import './product.style.css';

const Products = (props) => {
    return (
        <div className="product-container">
            {props.product.name} {props.product.reference} {props.product.price} 
            
            {
                props.product.statusName  
                ?
                    <span className="product-status-yes"> {props.product.status} </span>
                :
                    <span> {props.product.status} </span>
            }
            
        </div>
    );
    
}

export default Products;