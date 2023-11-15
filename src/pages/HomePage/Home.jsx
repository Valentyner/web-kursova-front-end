import React, { useEffect, useState } from 'react';
import Item from '../../components/Item/Item';
import axios from "../../axios";
import NavBar from '../../components/NavBar/NavBar';


const Home = () => {
    const [tenders, setTenders] = useState([]);

    useEffect(() => {
        axios.get('/tenders').then(res => {
            setTenders(res.data)
        }).catch(err => {
            console.log(err);
            alert("Помилка отримання")
        })
    }, [])

    return (
        <>
        <NavBar/>
            {tenders && tenders.map((tender) => (
                <Item tender={tender} />
            ))}
        </>
    );
};

export default Home;