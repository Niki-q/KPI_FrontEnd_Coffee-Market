import React from 'react';
import {CMBProduct} from "../models";

interface ComboProductProps{
    product:CMBProduct
}

const ComboProduct = ({product}:ComboProductProps) => {
    return (
        <div>
            <div id={product.id} className="Combo__Products__Product">
                <div className="Combo__Products__Product__Image">
                    <img src={product.image} alt={"Combo Icon Id - "+product.id} />
                </div>
                <div className="Combo__Products__Product__Content">
                    <p className="f-Price_Product">
                    <span>{product.price.toFixed(3)}</span>
                        <span className="f-Old_Price_Product">{product.old_price.toFixed(3)}</span>
                    </p>
                    <p className="f-Title">{product.title}</p>
                    <p className="f-Discription">{product.description}</p>
                    <div className="Combo__Products__Product__Content__Buttons">
                        <div className="Combo__Products__Product__Content__Buttons__Buy bg-Accent_Color f-Button">MUA
                            NGAY
                        </div>
                        <div
                            className="Combo__Products__Product__Content__Buttons__Details f-Button color-Primary_Color">CHI
                            TIẾT
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComboProduct;