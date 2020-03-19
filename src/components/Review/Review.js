import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart,setCart]=useState([]);
    const[orderPlaced,setOrderPlaced]=useState(false)
    const handlePlaceOrder=()=>{
         setCart([]);
         setOrderPlaced(true);
         processOrder();

        //console.log("order placed");
    }
    

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
    },[]);
    let thankyou;
    if(orderPlaced)
    {
        thankyou=<img src={happyImage} alt=""/>
  
    }
    return (
        <div className="twin-component">
            <div className="product-container">
            
            {
                cart.map(pd=><ReviewItem
                key={pd.key}
                removeProduct={removeProduct}
                 product={pd}></ReviewItem>)
            }
            {thankyou}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder}  className="main-button">Place Order</button>
                 </Cart>
            </div>
        </div>
    
    );
};

export default Review;