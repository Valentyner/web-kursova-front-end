import React from 'react';
import Item from '../components/Item/Item';
import NavBar from '../components/NavBar/NavBar';
import Pagination from '../components/Pagination/Pagination';

const Home = () => {
    return (
        <>
        <NavBar/>
        <Pagination/>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
        </>
    );
};

export default Home;