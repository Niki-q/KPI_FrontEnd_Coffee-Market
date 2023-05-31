import React from 'react';
import ReactDOM from 'react-dom/client';
import CoffeeSwiper from "./CoffeeSwiper";

import './css/styles.css'
import ComboSwiper from "./ComboSwiper";
import {tab_products} from "./data/products";
import GiftTab from "./GiftTab";

const coffee_root = ReactDOM.createRoot(
  document.getElementById('coffee_root') as HTMLElement
);

coffee_root.render(<CoffeeSwiper/>);


const combo_root = ReactDOM.createRoot(
    document.getElementById('combo_root') as HTMLElement
);

combo_root.render(<ComboSwiper/>)

const giftset_root = ReactDOM.createRoot(
    document.getElementById('giftset_root') as HTMLElement
);

giftset_root.render(<GiftTab productList={tab_products}/>)
