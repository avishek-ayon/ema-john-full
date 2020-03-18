import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const{name,quantity,key,price }=props.product;
    const reviewItemStyle=
        {marginBottom:'5px',
        borderBottom:'1px solid lightgray',
        paddingBottom:'5px',
        marginLeft:'200px'
        
    };
    return (

        <div style={reviewItemStyle} className="review-item">
            <h3>{name}</h3>
            <p>Quantity:{quantity}</p>
            <p><small>${price}</small></p>
            <br/>
            <button 
            className="main-button"
            onClick={()=>props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;