import React, { useState, useEffect } from "react";
import {
    IndexCardContainer,
    IndexCard,
    IndexCardWrapper,
    IndexH2,
    
    IndexH3s,
    IndexH3,
} from "./IndexCardElements";
import '../../styles.css'

import { getProducts } from "../../core/helper/coreapicalls";

const IndexCardMain = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProducts = () => {
        getProducts()
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    console.log(error);
                } else {
                    setProducts(data);
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadAllProducts();
    }, []);

    return (
        
        <>
       
        <IndexCardContainer>
            <IndexCardWrapper>
                
        {products.map((product, index) => {
                return (
                    <div key={index}>
                        <IndexCard>
                            <IndexH2>{product.name}</IndexH2>
                            <IndexH3>{product.lastPrice}₹</IndexH3>
                            
                            {product.pChange < 0 ? (
                            	<IndexH3s className="red">
                            	{product.change}₹ ({product.pChange}%)
                            	</IndexH3s>):(
                            	<IndexH3s className="green">
                            	{product.change}₹ ({product.pChange}%)
                            	</IndexH3s>
                            	)}
                        </IndexCard>
                    </div>
                );
            })}
        
      </IndexCardWrapper>
        </IndexCardContainer>
        </>
    );
};

export default IndexCardMain;
