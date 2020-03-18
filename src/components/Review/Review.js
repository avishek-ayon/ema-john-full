import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart,setCart]=useState([]);

//websitr theke remove kora
    const removeProduct=(productKey)=>
    {
        console.log("clicked",productKey);
        const newCart=cart.filter(pd=>pd.key!==productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{
        const savedCart=getDatabaseCart();
        const productKeys=Object.keys(savedCart);
        //const count=productKeys.map(keys=>savedCart[keys])
        const cartProducts=productKeys.map(keys=>{
            const product=fakeData.find(pd=> pd.key === keys);
            product.quantity=savedCart[keys];
            return product;
        });
        setCart(cartProducts);
    },[])
    return (
        <div className="twin-component">
            <div className="product-container">
            {/* <h1>Cart Item:{cart.length}</h1> */}
            {
                cart.map(pd=><ReviewItem
                key={pd.key}
                removeProduct={removeProduct}
                 product={pd}></ReviewItem>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    
    );
};

export default Review;