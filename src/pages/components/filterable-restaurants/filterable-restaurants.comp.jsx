import React from 'react';
import MenuList from '../menu-list/menu-list.comp';
import OrdersList from '../orders-list/orders-list.comp';

import './filterable-restaurants.style.css';

const FilterableRestaurants = (props) => {
    return (
        <div className="filterable-restaurants-container">
            <MenuList 
                restaurantList= {props.restaurantList}
                onSaveProduct={props.onSaveProduct} 
            />
            <OrdersList
                orderList= {props.orderList}
                onSaveOrder={props.onSaveOrder} 
            />
        </div>
    );
    
}

export default FilterableRestaurants;