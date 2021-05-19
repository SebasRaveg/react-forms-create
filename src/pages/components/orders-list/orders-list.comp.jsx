import React, { useState } from 'react';
import Orders from '../orders/orders.comp';
import RestaurantName from '../restaurant-name/restaurant-name.comp';

import './orders-list.style.css';

const OrdersList = (props) => {

    const [restaurant, setRestaurant] = useState('');
    const [numberOrder, setNumberOrder] = useState('#');
    const [name, setName] = useState('');
    const [reference, setReference] = useState('');
    const [status, setStatus] = useState('');

    const saveOrder = (event) =>{
        event.preventDefault();
        const newOrders ={
            id: name,
            numberOrder: Number (numberOrder),
            name: name,
            reference: reference,
            status: status,  
        }
        props.onSaveOrder(newOrders, restaurant);
    }

    return (
        <div className="order-list-container">
            <hr/>
            <div>
                <form>
                    <select
                        value={restaurant}
                        onChange={(event) =>{
                            setRestaurant(event.target.value);
                        }}
                    >
                        <option value=""> -- SELECT A RESTAURANT -- </option>
                        <option value="r1"> FRISBEE </option>
                        <option value="r2"> CORRAL </option>
                    </select>
                    <br/>
                    <input
                        placeholder="#Order"
                        type="number"
                        value={numberOrder}
                        onChange={(event) =>{
                            setNumberOrder(event.target.value);
                        }}
                    />     
                   
                    <input 
                        placeholder="Product Name"
                        type="text"
                        value={name}
                        onChange={(event) =>{
                            setName(event.target.value);
                        }}
                    />
                    
                    <input 
                        placeholder="Reference"
                        type="text"
                        value={reference}
                        onChange={(event) =>{
                            setReference(event.target.value);
                        }}
                    />
                    
                    <input 
                        placeholder="Status"
                        type="text"
                        value={status}
                        onChange={(event) =>{
                            setStatus(event.target.value);
                        }}
                    />
                    <br/>
                    <button
                        onClick={saveOrder}
                    > 
                        Save Order
                    </button>
                </form>
            </div>
            <hr/>

            {props.orderList.map((restaurant,index) => {
                return(
                    <React.Fragment key={restaurant.id}>
                        <RestaurantName restaurantName={restaurant.name}/>
                        <table className="table-product">
                            <thead>
                                <tr>
                                    <th>#Order</th>
                                    <th>Product</th>
                                    <th>Reference</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                        </table>
                        {restaurant.orders.map((order, indexProduct) => {
                            return(
                                <Orders
                                     key={order.id}
                                     order={order}
                                />
                            );
                        })}
                        <hr/> 
                    </React.Fragment>
                );
            })}
            
        </div>
    );
    
}

export default OrdersList;