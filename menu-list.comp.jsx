import React from 'react';
import Orders from '../orders/orders.comp';
import Products from '../products/product.comp';
import RestaurantName from '../restaurant-name/restaurant-name.comp';

import './menu-list.style.css';

const MenuList = (props) => {

    console.log({props});
     
    return (
        <div className="menu-list-container">
            <RestaurantName restaurantName="Frisbiee"/>
            <table className="table-product">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Grade</th>
                        <th>Gender</th>
                    </tr>
                </thead>
            </table>
            <Products product={{
                name: "FrisBurrito",
                reference:"frB",
                price: 20.000,
                status: "yes",
            }}/>
        </div>
    );
    
}

export default MenuList;

{restaurant.products.map((product, indexProduct) => {
    return(
        <Products
            key={product.id}
            product={product}
        />
    );
})}