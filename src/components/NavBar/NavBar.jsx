import React from 'react';
import './NavBar.css'
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../redux/slices/auth";

const NavBar = () => {

  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    if (window.confirm('Ви дійсно бажаєте вийти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ background: "white" }}><img src="logo.png" alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/tenders"} className='nav-link active'>Переглянути закупівлі</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/create-tender">Залишити заяву на закупівлю</a>
            </li>
            <li className="nav-item">
              <Link to={"/contact-us"} className='nav-link active'>Зв'язатися з нами</Link>
            </li>
            <li className="nav-item">
              <Link to={"/regulatory"} className='nav-link active'>Нормативно-правова база</Link>
            </li>
            <div className="d-flex right" role="search">
              {isAuth ? (
                <>
                  <Link to={"/"}>
                    <button onClick={onClickLogout} type="button" className="btn btn-primary">Вийти</button>
                  </Link>
                  <Link to={"#"}>
                    <button type="button" className="btn btn-success">Особистий кабінет</button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/login"}>
                    <button type="button" className="btn btn-primary">Авторизуватися</button>
                  </Link>
                  <Link to={"/registration"}>
                    <button type="button" className="btn btn-success">Зареєструватися</button>
                  </Link>
                </>
              )}

            </div>
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default NavBar;