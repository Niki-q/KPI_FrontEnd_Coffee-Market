import React from 'react';
import {TabProduct} from "../models";
import {ReactSVG} from "react-svg";

interface GiftsetProductProps {
    product:TabProduct
}

const GiftsetProduct = ({product}:GiftsetProductProps) => {
    return (
        <>
            <div className="Giftset__Container__Context__Data__Image " style={{display:"inline-flex"}}>
                <div className="Giftset__Container__Context__Data__Image__Background">
                    <div className="Giftset__Container__Context__Data__Image__Background__Color bg-Light_gray"></div>
                </div>
                <img src={product.image} alt="Giftset Icon"/>
            </div>
            <div className="Giftset__Container__Context__Data__Text">
                <p className="f-Price_Product">{product.price.toFixed(3)}</p>
                <p className="f-Title">{product.title}</p>
                <p className="f-Discription" style={{marginBottom: 0}}>{product.description}</p>
                <div id={""+product.id} className="Giftset__Container__Context__Data__Text__Icon-field">
                    <div className="Giftset__Container__Context__Data__Text__Icon-field__Icon">
                        <ReactSVG src={product.svg.first.path}/>
                    </div>
                    <div className="Giftset__Container__Context__Data__Text__Icon-field__Text Icon-field-text_1">
                        <span className="f-Discription">{product.svg.first.text.description}</span><br/>
                        <span className="f-Sub_Title">{product.svg.first.text.sub_title}</span>
                    </div>
                    <div className="Giftset__Container__Context__Data__Text__Icon-field__Icon">
                        <ReactSVG src={product.svg.second.path}/>
                    </div>
                    <div className="Giftset__Container__Context__Data__Text__Icon-field__Text Icon-field-text_2">
                        <span className="f-Discription">{product.svg.second.text.description}</span><br/>
                        <span className="f-Sub_Title">{product.svg.second.text.sub_title}</span>
                    </div>
                </div>
                <div className="Giftset__Container__Context__Data__Text__Buttons">
                    <div className="Giftset__Container__Context__Data__Text__Buttons__Buy bg-Accent_Color f-Button">MUA
                        NGAY
                    </div>
                    <div
                        className="Giftset__Container__Context__Data__Text__Buttons__Details f-Button color-Primary_Color">CHI
                        TIẾT
                    </div>
                </div>
            </div>
        </>
    );
};

export default GiftsetProduct;