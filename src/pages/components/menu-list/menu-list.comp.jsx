import React, { useState } from 'react';
import Products from '../products/product.comp';
import RestaurantName from '../restaurant-name/restaurant-name.comp';

import './menu-list.style.css';

const MenuList = (props) => {
     
    const [restaurant, setRestaurant] = useState('');
    const [name, setName] = useState('');
    const [reference, setReference] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');

    const save = (event) =>{
        event.preventDefault();
        const newProduct ={
            id: name,
            name: name,
            reference: reference,
            price: Number(price),
            status: status,  
        }
        props.onSaveProduct(newProduct, restaurant);
    }

    return (
        <div className="menu-list-container">
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
                    <br/>
                    <input 
                        placeholder="Price"
                        type="number"
                        value={price}
                        onChange={(event) =>{
                            setPrice(event.target.value);
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
                        onClick={save}
                    > 
                        Save Product
                    </button>
                </form>
            </div>
            <hr/>
            {props.restaurantList.map((restaurant,index) => {
                return(
                    <React.Fragment key={restaurant.id}>
                        <RestaurantName restaurantName={restaurant.name}/>
                        <table className="table-product">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Reference</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                        </table>
                        {restaurant.products.map((product, indexProduct) => {
                            return(
                                <Products
                                     key={product.id}
                                     product={product}
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

export default MenuList;