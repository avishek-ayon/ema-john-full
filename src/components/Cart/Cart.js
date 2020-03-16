import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart);
    //const total=cart.reduce((total,prd)=>total+prd.price,0)
    //or
    let total=0;
    for(let i=0;i<cart.length;i++)
    {
        const product=cart[i];
        total=total+product.price;

    }
    let shipping=0;
  
    if(total>35)
    {
        shipping=0;
    }
    else if(total>15)
    {
        shipping=4.99;
    }
    else if(total>0)
    {
        shipping=12.99;
    }

    const tax=total/10;
    const grandTotal=(total+shipping+tax);

    const formatNumber=num=>{
        const precision=num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h1>Order Summary</h1>
            <h3>Item Ordered:{cart.length}</h3>
            <h3>Product Price:{formatNumber(total)}</h3>
            <h3>Shipping:{shipping}</h3>
            <h3>Total + Vat:{formatNumber (tax)}</h3>
            <h3>Total Price:{formatNumber(grandTotal)}</h3>
            
        </div>
    );
};

export default Cart;