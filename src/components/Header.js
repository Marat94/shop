import React, {useState} from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openLeng, setOpenLeng] = useState(true);
  const [openCurrency, setOpenCurrency] = useState(true);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleLeng = () => {
    setOpenLeng(!openLeng);
  };

  const toggleCurrency = () => {
    setOpenCurrency(!openCurrency);
  };

  console.log(openMenu, openLeng, openCurrency);

  return (
    <header className="home-page">
      <div id="my-page">
        <div className="site-header">
          <div className="top-line-wrapper">
            <div className="container">
              <div className="top-line clearfix">
                <button className="hamburger hamburger--squeeze" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>

                <ul className="nav-top-left">
                  <li>
                    <div onClick={toggleCurrency} className={`${
                      openCurrency ? 'currency-selector dropdown' : 'currency-selector dropdown open'
                    }`}>
                      <span
                        className={`expand-more dropdown-button-tl`}
                        data-toggle="dropdown"
                        aria-expanded={`${openCurrency ? 'false' : 'true'}`}
                      >
                        Рубли ₽
                      </span>
                      <ul className="dropdown-menu">
                        <li className="current">
                          <Link title="Рубли" rel="nofollow" to="" className="dropdown-item">
                            РУБЛИ ₽
                          </Link>
                        </li>
                        <li>
                          <Link title="Euro" rel="nofollow" to="" className="dropdown-item">
                            EUR €
                          </Link>
                        </li>
                        <li>
                          <Link title="US Dollar" rel="nofollow" to="" className="dropdown-item">
                            USD $
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={toggleLeng}
                      className={`${
                        openLeng ? 'site-lng dropdown' : 'site-lng dropdown open'
                      }`}
                    >
                      <div
                        className="button-lng-box dropdown-button-tl"
                        data-toggle="dropdown"
                        role="button"
                        aria-expanded={`${openLeng ? 'false' : 'true'}`}
                      >
                        Русский
                      </div>
                      <div className="lng-box-hiiden-wrapp dropdown-menu dropdown-box-s-wrap">
                        <div className="lng-box-hiiden dropdown-box-s">
                          <span className="hide-lng">
                            <i className="fa fa-long-arrow-left"></i> Назад
                          </span>
                          <ul>
                            <li className="active">
                              <Link to="#" target="_blank">
                                Русский<span>Русский</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                English<span>Английский</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span className="top-priv">Добро пожаловать на Yourlogo!</span>
                  </li>
                </ul>

                <ul className="nav-top-right">
                  <li>
                    <Link to="#" className="title-pages">
                      Оплата и доставка
                    </Link>
                  </li>
                  <li>
                    <Link to="#sign_in" className="reg-or-sign hidden-xs popup_content">
                      <i className="fa fa-user"></i>Регистрация / Вход
                    </Link>
                    <Link to="#sign_in" className="ref-or-sign-mobile visible-xs popup_content">
                      <img src="img/header/profile.svg" alt="alt"/>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="center-line">
            <div className="container full-height">
            </div>
          </div>

          <div className="navigation-wrapper">
            <div className="container">
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;