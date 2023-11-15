import { React, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Button } from "@mui/material";
import './MakeTender.css'
import { useNavigate } from 'react-router-dom';
import axios from '../../axios';

const MakeTender = () => {

    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [text, setText] = useState('');
    const [unifiedStateRegister, setUnifiedStateRegister] = useState('');
    const [legalEntity, setLegalEntity] = useState('');

    const onSubmit = async () => {
        try {

            const fields = {
                title,
                text,
                price,
                unifiedStateRegister,
                legalEntity,
            }

            const data = await axios.post('/tenders', fields)
            console.log(data);

            navigate(`/tender/${data.data._id}`)

        } catch (error) {
            console.warn(error);
            alert("Помилка при завантажуванні")
        }
    }


    return (
        <>
            <NavBar />
            <div className='main-container'>
                <h1 className='main-header'>Створити заяву на закупівлю</h1>
                <div className='form-container'>
                    <form className='main-form'>
                        <input
                            type="text"
                            placeholder='Введіть назву закупівлі'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                        <input
                            type="text"
                            placeholder='Введіть текст закупівлі'
                            value={text}
                            onChange={(e) => setText(e.target.value)} />
                        <input
                            type="text"
                            placeholder='Введіть юридичну особу'
                            value={legalEntity}
                            onChange={(e) => setLegalEntity(e.target.value)} />
                        <input
                            type="text"
                            placeholder='Введіть ЄРДПОУ'
                            value={unifiedStateRegister}
                            onChange={(e) => setUnifiedStateRegister(e.target.value)} />
                        <input
                            type="text"
                            placeholder='Введіть очікувану ціну'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} />
                    </form>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            style={{ height: '50px', width: '300px' }}
                            variant='contained'
                            onClick={onSubmit}>
                            Створити замовлення
                        </Button>
                    </div>

                </div>
            </div>
        </>
    );
};
export default MakeTender;