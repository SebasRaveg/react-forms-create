import React from 'react';
import Orders from '../orders/orders.comp';
import Products from '../products/product.comp';
import RestaurantName from '../restaurant-name/restaurant-name.comp';

import './menu-list.style.css';

const MenuList = () => {
    return (
        <div className="menu-list-container">
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
            <Products/>
        </div>
    );
    
}

export default MenuList;