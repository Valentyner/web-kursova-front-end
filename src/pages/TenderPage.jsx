import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const TenderPage = () => {
    return (
        <>
            <NavBar />
            <a href="/" style={{ height: '20px', margin: "10px", textDecoration: 'none', color: "black"}}><ArrowBackIcon/>Повернутися назад</a>
            <div className="container">
                <div class="main_block">
                    <div className="tender_head">
                        <p>Процедура закупівлі: <b>Відкриті торги з особливостями</b></p>
                        <p>Процедуру оголошено: 7 лист. 2023(останні зміни: 07/11/2023 7:03:17)</p>
                        <p>Ідентифікатор плану закупівлі: UA-P-2023-11-07-000025a</p>
                    </div>
                    <div className="tender_price">
                        <h1>Очікувана вартість з урахуванням ПДВ:</h1>
                        <p style={{ fontSize: "40px", color:"green" }}><b>27400.00 грн</b></p>
                    </div>
                </div>
                <h1 className="main_header">КОД ЗА ДК 021:2015 - 33690000-3 ЛІКАРСЬКІ ЗАСОБИ РІЗНІ (НАБІР РЕАКТИВІВ ДЛЯ АМПЛІФІКАЦІЇ, НАБІР РЕАКТИВІВ ДЛЯ ВИЗНАЧЕННЯ КОНЦЕНТРАЦІЇ ДНК ДЛЯ ФЛУОРОМЕТРА)</h1>
            </div>
        </>
    );
};

export default TenderPage;