import React from 'react';
import {CProduct} from "../models";

interface CoffeeProductProps {
    product:CProduct
}

const CoffeeProduct = ({product}: CoffeeProductProps) => {
    return (
        <div>
            <div id={product.id} className="Coffee__Products__Line__Product">
                <div className="Coffee__Products__Line__Product__Image">
                    <img src={product.image} alt="Image Product 1" />
                </div>
                <div className="Coffee__Products__Line__Product__Content">
                    <p className="f-Price_Product">{product.price.toFixed(3)}</p>
                    <p className="f-Title">{product.title}</p>
                    <p className="f-Discription">{product.description}</p>
                    <div className="Coffee__Products__Line__Product__Content__Buttons">
                        <div
                            className="Coffee__Products__Line__Product__Content__Buttons__Buy bg-Accent_Color f-Button">MUA
                            NGAY
                        </div>
                        <div className="f-Button color-Primary_Color">CHI TIẾT</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeProduct;