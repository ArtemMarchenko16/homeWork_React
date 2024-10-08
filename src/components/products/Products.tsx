import React from 'react';
import {products} from "../../data";

const Products = () => {
    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>Price: ${product.price}</p>
                    <img src={product.images} alt={product.title} width="150" />
                </div>
            ))}
        </div>
    );
};

export default Products;