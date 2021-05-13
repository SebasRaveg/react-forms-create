import React from 'react';
import MenuForms from '../menu-form/menu-form.comp';
import MenuList from '../menu-list/menu-list.comp';
import OrdersForm from '../orders-form/orders-form.comp';
import OrdersList from '../orders-list/orders-list.comp';

import './filterable-restaurants.style.css';

const FilterableRestaurants = () => {
    return (
        <div className="filterable-restaurants-container">
            <MenuForms/>
            <MenuList/>
            <OrdersForm/>
            <OrdersList/>
        </div>
    );
    
}

export default FilterableRestaurants;