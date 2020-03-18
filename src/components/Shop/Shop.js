import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    // console.log(fakeData);
    const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(first10);
    const [cart,setCart]=useState([]);
    const handleAddProduct=(product)=>{
        console.log("product added",product);
        const newCart=[...cart,product];
        setCart(newCart);
        const sameData=newCart.filter(pd=>pd.key===product.key)
        const count=sameData.length;
        addToDatabaseCart(product.key,count)
 
    }
    
 
    return (
          
        <div className="twin-component">
             {/* <h1>This is shop</h1>
            <h3>{products.length}</h3> */}
            <div className="product-container">
              
                {
                    // products.map(products=><Product><li>{products.name}</li></Product>)
                    products.map(pd=><Product 
                        key={pd.key}
                        showAddToCart={true}
                        handleAddProduct={handleAddProduct}
                        product={pd}>
                        </Product>)
                    }
               
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
         
           
        </div>
    );
};

export default Shop;