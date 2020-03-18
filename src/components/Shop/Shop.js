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
        const toBeAdded=product.key;
        const sameProduct=cart.find(pd=>pd.key===toBeAdded)
        let count=1;
        let newCart;
        if(sameProduct)
        {
            const count=sameProduct.quantity+1;
            sameProduct.quantity=count;
            const others=cart.filter(pd=>pd.key !==toBeAdded)
            newCart=[...others,sameProduct]
        }
        else{
            product.quantity=1;
            newCart=[...cart,product]
        }
        //console.log("product added",product);
        //const newCart=[...cart,product];
        setCart(newCart);
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