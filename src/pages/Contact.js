import React from 'react';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";


const Contact = () => {
  return (
    <Wrapper>
      <div id="my-content">

        <div className="content-page">
          <div className="contact-content equal-container">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <div className="card-contact equal-elem" style={{height: 243}}>
                    <div className="icon">
                      <img src="/img/location.svg" alt="address"/>
                    </div>
                    <div className="card-title">Адрес</div>
                    <div className="card-descr">
                      <span>Ставрополь, ул. Доваторцев дом 38 офис 341</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="card-contact equal-elem" style={{height: 243}}>
                    <div className="icon">
                      <img src="/img/phone.svg" alt="phone"/>
                    </div>
                    <div className="card-title">Телефон</div>
                    <div className="card-descr">
                      <span>+7 (495) 999-99-99</span>
                      <span>+7 (495) 999-99-99</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="card-contact equal-elem" style={{height: 243}}>
                    <div className="icon">
                      <img src="/img/email.svg" alt="email"/>
                    </div>
                    <div className="card-title">Почта</div>
                    <div className="card-descr">
                      <span>yourwebpixel@gmail.com</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="card-contact equal-elem" style={{height: 243}}>
                    <div className="icon">
                      <img src="/img/social.svg" alt="social"/>
                    </div>
                    <div className="card-title">Мы в соц. сетях</div>
                    <div className="card-descr">
                      <div className="socials">
                        <Link to="" className="social"><i className="fa fa-twitter"></i></Link>
                        <Link to="" className="social"><i className="fa fa-facebook"></i></Link>
                        <Link to="" className="social"><i className="fa fa-vk"></i></Link>
                        <Link to="" className="social"><i
                          className="fa fa-instagram"></i></Link>
                        <Link to="" className="social"><i className="fa fa-vimeo"></i></Link>
                        <Link to="" className="social"><i className="fa fa-youtube"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="map">
            <div className="container">
              <div className="map-container">
              </div>
            </div>
          </section>

          <section className="question">
            <div className="container">
              <h3 className="lite-title">У Вас есть вопросы?</h3>
              <span className="lite-descr">Оставьте свое сообщение и мы обязательно Вам ответим</span>
              <div className="row">
                <div className="col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6">
                  <form>
                    <div className="left-block-form">
                      <label>Ваше имя<input type="text" name="Имя" id="name"
                                            required=""/></label>
                      <label>Ваш телефон<input type="tel" name="Телефон" required=""
                                               className="phone_ru" maxLength="17"/></label>
                    </div>
                    <div className="right-block-form">
                      <label>Ваша фамилия<input type="text" name="Фамилия" id="surname"
                                                required=""/></label>
                      <label>Ваш e-mail<input type="email" name="e-mail" required=""
                                              pattern="\S+@[a-z]+.[a-z]+"/></label>
                    </div>
                    <label className="massage">Ваш вопрос<textarea name="Вопрос"
                                                                   id="text"></textarea></label>
                    <div className="button-wrapp">
                      <button className="btn">Отправить сообщение</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section className="question2">
            <div className="container">
              <div className="row">
                <div className="col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6">
                  <div className="user-iamge"><img src="img/home/Reid_Circle.jpg"
                                                   alt="Олег Дубровский"/></div>
                  <div className="user-name">Евгений Смирнов</div>
                  <form>
                    <label className="massage">Ваше сообщение<textarea name="Вопрос"
                                                                       id="text"></textarea></label>
                    <div className="button-wrapp">
                      <button className="btn">Отправить сообщение</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

        </div>

      </div>
    </Wrapper>
  )
}

export default Contact;