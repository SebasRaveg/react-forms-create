import React from 'react';

import './restaurant-name.style.css';

const RestaurantName = (props) => {
    return (
        <div className="restaurant-name-container">
            {props.restaurantName}
        </div>
    );
    
}

export default RestaurantName;