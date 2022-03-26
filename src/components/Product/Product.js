import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4 className='product-name'>{name}</h4>
            <div className="product-info">
                 <p>{seller}</p>
                 <p>Price: <b>${price}</b> </p>
                 <p>ratings: {ratings}</p>
            </div>


            <button className='btn-cart'>
                <p>Add To Cart</p>
            </button>
             

        </div>
    );
};

export default Product;