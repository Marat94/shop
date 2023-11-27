import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const CategoryMenu = () => {
  const [openSignIn, setOpenSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleSignIn = () => {
    setOpenSignIn(!openSignIn);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <div
        className={`${openSignIn ? 'mfp-bg mfp-fade mfp-ready ' : 'mfp-bg mfp-fade mfp-ready mfp-removing' ? "mfp-bg mfp-fade mfp-ready mfp-removing" : ""
        }`}
      ></div>

      <div
        className={`${openSignIn
          ? 'mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready '
          : 'mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready mfp-removing'
            ? 'mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready mfp-removing' : ""
        } `}
        tabIndex="-1"
        style={{overflow: `hidden auto`}}
      >
        <div className="mfp-container mfp-s-ready mfp-inline-holder">
          <div onClick={toggleSignIn} className="mfp-content">
            <button onClick={toggleSignIn} className="mfp-close">
              Click
            </button>
            <div className="modal" id="sign_in">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="reg-title">
                      Впервые у нас?
                      <Link to="/registr">Зарегистрироваться</Link>
                    </div>
                  </div>
                  <div className="modal-body">
                    <form id="sigh_in_form">
                      <p className="form-row form-row-wide">
                        <label>
                          Почта<span className="required"></span>
                        </label>
                        <input
                          onChange={handleChangeEmail}
                          type="text"
                          value={email}
                          name="useremail"
                          placeholder="Ваш e-mail"
                          className="input-text"
                        />
                      </p>
                      <p className="form-row form-row-wide">
                        <label>
                          Пароль<span className="required"></span>
                        </label>
                        <input
                          onChange={handleChangePassword}
                          type="password"
                          name="password"
                          placeholder="Ваш пароль"
                          className="input-text"
                        />
                      </p>
                      <p className="form-row form-button clearfix">
                        <label className="inline">
                          <input type="checkbox"/>
                          <span className="input"></span>Запомнить меня
                        </label>
                        <button type="submit" className="btn-submit">
                          Войти
                        </button>
                      </p>
                      <Link to="#" className="return-pass">
                        Забыли пароль?
                      </Link>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <div className="social-title">Войти с помощью</div>
                    <div className="socials">
                      <Link to="" className="social">
                        <i className="fa fa-twitter"></i>
                      </Link>
                      <Link to="" className="social">
                        <i className="fa fa-facebook"></i>
                      </Link>
                      <Link to="" className="social">
                        <i className="fa fa-vk"></i>
                      </Link>
                      <Link to="" className="social">
                        <i className="fa fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mfp-preloader">Загрузка...</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
