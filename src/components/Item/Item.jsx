import React from 'react';
import "bootstrap/dist/js/bootstrap.min.js";
import "./Item.css"
import { Link } from 'react-router-dom';


const Item = ({tender}) => {
    return (
        <div className="p-3 mb-2 bg-secondary-subtle text-emphasis-secondary" >
            <div className="card" >
                <h5 className="card-header" style={{ fontSize: "14px" }}>{tender.title}</h5>
                <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: "14px" }}>{tender.code}</h5>
                    <p className="card-text" style={{ fontSize: "14px" }}>Дата створення {tender.createdAt}</p>
                    <p className="card-text" style={{ fontSize: "14px" }}>{tender.legalEntity}</p>
                    <p className="card-text" style={{ fontSize: "14px" }}>ЄДРПОУ: {tender.unifiedStateRegister}</p>
                </div>
                <div className="card-body">
                    <h5 className="card-title" style={{ color: 'rgb(40, 150, 49)' }}>Очікувана вартість: {tender.price} грн</h5>
                    <Link to={`/tender/${tender._id}`}><button className="btn btn-success">Переглянути</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Item;