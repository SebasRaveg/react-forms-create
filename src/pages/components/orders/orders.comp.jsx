import React from 'react';

import './orders.style.css';

const Orders = (props) => {
    return (
        <div className="order-container">
            {props.order.numberOrder} {props.order.name} {props.order.reference}  
            
            {
                props.order.statusName  
                ?
                    <span className="order-status-yes"> {props.order.status} </span>
                :
                    <span> {props.order.status} </span>
            }
            
        </div>
    );
    
}

export default Orders;