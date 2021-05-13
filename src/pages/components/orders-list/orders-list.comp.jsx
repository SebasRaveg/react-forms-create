import React from 'react';
import Orders from '../orders/orders.comp';
import Products from '../products/product.comp';
import RestaurantName from '../restaurant-name/restaurant-name.comp';

import './orders-list.style.css';

const OrdersList = () => {
    return (
        <div className="order-list-container">
            <RestaurantName/>
            <table className="table-product">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Grade</th>
                        <th>Gender</th>
                    </tr>
                </thead>
            </table>
            <Orders/>
        </div>
    );
    
}

export default OrdersList;