import React, { useState, useEffect } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from '../axios';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

const TenderPage = () => {
    const [data, setData] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/tender/${id}`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.warn(err);
                alert("Помилка отримання тендеру");
            });
    }, []);

    return (
        <>
        <NavBar/>
            <a href="/tenders" style={{ height: '20px', margin: "10px", textDecoration: 'none', color: "black" }}><ArrowBackIcon />Повернутися назад</a>
            {data ? (
                <div className="container">

                    <div className="main_block">

                        <>
                            <div className="tender_head">
                                <p>Процедура закупівлі: <b>Відкриті торги з особливостями</b></p>
                                <p>Процедуру оголошено: {data.createdAt} (останні зміни: {data.updatedAt})</p>
                                <p>Ідентифікатор плану закупівлі: {data.code}</p>
                            </div>
                            <div className="tender_price">
                                <h1>Очікувана вартість з урахуванням ПДВ:</h1>
                                <p style={{ fontSize: "40px", color: "green" }}><b>{data.price}.00 грн</b></p>
                            </div>
                        </>
                    </div>
                    <h1 className="main_header">{data.text}</h1>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default TenderPage;
