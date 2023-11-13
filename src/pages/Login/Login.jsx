import React from 'react';
import "../../css/login.css"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";
import { TextField, Paper, Button, Typography } from "@mui/material";
import styles from "./Login.module.scss";


const Login = () => {

    const isAuth = useSelector(selectIsAuth);

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({
        defaultValues: {
            email: "robertdoms2002@gmail.com",
            password: "12345"
        },
        mode: 'onChange',
    });

    const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
        alert('Не вдалося зареєструватися');
    } else {
        window.localStorage.setItem('token', data.payload.token);
    }
}


    if (isAuth) {
        return <Navigate to="/" />
    }

    return (
        <Paper classes={{ root: styles.root }}>
            <Typography classes={{ root: styles.title }} variant="h5">
                Вхід в аккаунт
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    className={styles.field}
                    label="E-Mail"
                    error={Boolean(errors.email?.message)}
                    helperText={errors.email?.message}
                    type="email"
                    {...register('email', { required: 'Вкажіть пошту' })}
                    fullWidth
                />
                <TextField
                    className={styles.field}
                    label="Пароль"
                    type='password'
                    error={Boolean(errors.password?.message)}
                    helperText={errors.password?.message}
                    {...register('password', { required: 'Вкажіть пароль' })}
                    fullWidth />
                <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
                    Войти
                </Button>
            </form>
        </Paper>
    );
};

export default Login;
