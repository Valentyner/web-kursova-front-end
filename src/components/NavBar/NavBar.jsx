import React from 'react';
import './NavBar.css'
import "bootstrap/dist/js/bootstrap.min.js";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/" style={{ background: "white" }}><img src="logo.png" alt="" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="/">Переглянути закупівлі</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Залишити заяву на закупівлю</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Зв'язатися з нами</a>
            </li>
            <div class="d-flex right" role="search">
              <a class="a" href="/login">
                <button type="button" class="btn btn-primary">Авторизуватися</button>
              </a>
              <a class="a" href="#">
                <button type="button" class="btn btn-success">Зареєструватися</button>
              </a>
            </div>
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default NavBar;