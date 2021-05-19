import React, { useState } from 'react';
import FilterableRestaurants from './components/filterable-restaurants/filterable-restaurants.comp';

const RestaurantsList = () => {

    let restaurantList = [
            {
                id:'r1',
                name:'FRISBEE',
                products:[
                    {
                        id:'r1p1',
                        name: "FrisBurrito",
                        reference:"frB",
                        price: 20.000,
                        status: "yes",  
                    }
                    
                ]
            },
            {
                id:'r2',
                name:'CORRAL',
                products:[
                    {
                        id:'r2p1',
                        name: "FrisBurrito",
                        reference:"frB",
                        price: 20.000,
                        status: "yes",  
                    }
                    
                ]
            }
    ]; 

    let orderList = [
        {
            id:'r1',
            name:'FRISBEE',
            orders:[
                {
                    id:'r1p1',
                    numberorder: 5576,
                    name: "FrisBurrito",
                    reference:"frB",
                    status: "yes",  
                }
                
            ]
        },
        {
            id:'r2',
            name:'CORRAL',
            orders:[
                {
                    id:'r2p1',
                    numberorder: 5576,
                    name: "FrisBurrito",
                    reference:"frB",
                    status: "yes",  
                }
                
            ]
        }
    ]; 
    
    const [products, setProducts] = useState(restaurantList); 
    const [orders, setOrders] = useState(orderList); 

    return (
        <FilterableRestaurants 
            restaurantList= {products}
            onSaveProduct={(productObj, restaurantId) =>{
                const newProducts = [];
                for(let i=0; i<products.length;i++){
                    if(products[i].id !== restaurantId){
                        newProducts.push(products[i]);
                    }
                    else{ 
                        newProducts.push(
                            {
                                ...products[i],
                                products:[...products[i].products, productObj]
                            }
                        ); 
                    }
                }
                setProducts(newProducts); 
            }}

            orderList= {orders}
            onSaveOrder={(orderObj, orderId) =>{
                const newOrders = [];
                for(let i=0; i<orders.length;i++){
                    if(orders[i].id !== orderId){
                        newOrders.push(orders[i]);
                    }
                    else{ 
                        newOrders.push(
                            {
                                ...orders[i],
                                orders:[...orders[i].orders, orderObj]
                            }
                        ); 
                    }
                }
                setOrders(newOrders); 
            }}
        />
    );
    
}

export default RestaurantsList;