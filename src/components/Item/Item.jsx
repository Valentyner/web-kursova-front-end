import React from 'react';
import "bootstrap/dist/js/bootstrap.min.js";
import "./Item.css"


const Item = () => {
    return (
        <div class="p-3 mb-2 bg-secondary-subtle text-emphasis-secondary" >
            <div class="card" >
                <h5 class="card-header" style={{ fontSize: "14px" }}>Маски захисні зварника код 18140000-2 «Аксесуари до робочого одягу»</h5>
                <div class="card-body">
                    <h5 class="card-title" style={{ fontSize: "14px" }}>UA-2023-11-06-003812-a</h5>
                    <p class="card-text" style={{ fontSize: "14px" }}>Дата створення 2023-11-06 11:04:52</p>
                    <p className="card-text" style={{ fontSize: "14px" }}>ПУБЛІЧНЕ АКЦІОНЕРНЕ ТОВАРИСТВО "УКРНАФТА"</p>
                    <p className="card-text" style={{ fontSize: "14px" }}>ЄДРПОУ: 00135390</p>
                </div>
                <div class="card-body">
                    <h5 class="card-title" style={{ color: 'rgb(40, 150, 49)' }}>Очікувана вартість:18,000,000 грн</h5>
                    <a href="/tender" class="btn btn-success">Переглянути</a>
                </div>
            </div>
        </div>

    );
};

export default Item;