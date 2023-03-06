import React from 'react';
import {CProductLine} from "../models";
import CoffeeProduct from "./CoffeeProduct";

interface CoffeeProductLineProps {
    line:CProductLine
}

const CoffeeProductLine = ({line}:CoffeeProductLineProps) => {
    return (
        <div className='Coffee__Products__Line'>
            <CoffeeProduct product={line.prod1} key = {line.prod1.id}></CoffeeProduct>
            <CoffeeProduct product={line.prod2} key = {line.prod2.id}></CoffeeProduct>
        </div>
    );
};

export default CoffeeProductLine;