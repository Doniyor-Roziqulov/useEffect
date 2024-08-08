import React from "react";
import logo from "../../images/logo.svg";
import instagram from "../../images/instagram.svg";

const Footer = () => {
    return (
        <footer className="pt-12 pb-14 bg-slate-50">
            <div className="container max-w-7xl mx-auto px-3 xl:px-0">
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
                <div className="flex flex-wrap justify-between mt-7 gap-3">
                    <div>
                        <strong className="text-lg font-bold mb-5 block">
                            Информация
                        </strong>
                        <p className="text-black text-sm mb-5">
                            Все права защищены © 2015 <br /> интернет-магазин
                            AIKEA.BY <br /> Беларусь.
                        </p>
                        <p className="text-black text-sm mb-5">
                            УНП 191828159 ИП Парейко В.С., <br />{" "}
                            регистрационный номер в <br /> торговом реестре
                            158299
                        </p>
                        <p className="text-black text-sm border-b inline-block border-black">
                            Политика конфиденциальности
                        </p>
                    </div>
                    <div>
                        <strong className="text-lg font-bold mb-5 block">
                            Меню
                        </strong>
                        <p className="text-slate-400 mb-5">
                            <a className="text-black text-sm" href="#">
                                Главная{" "}
                            </a>{" "}
                            |{" "}
                            <a className="text-black text-sm" href="#">
                                Каталог{" "}
                            </a>
                            |{" "}
                            <a className="text-black text-sm" href="#">
                                Товары в наличии
                            </a>
                        </p>
                        <p className="text-slate-400 mb-5">
                            <a className="text-black text-sm" href="#">
                                Скидки{" "}
                            </a>{" "}
                            |
                            <a className="text-black text-sm" href="#">
                                Популярное{" "}
                            </a>{" "}
                            |
                            <a className="text-black text-sm" href="#">
                                Вдохновение{" "}
                            </a>
                        </p>
                        <p className="text-slate-400 mb-5">
                            <a className="text-black text-sm" href="#">
                                Доставка
                            </a>{" "}
                            |{" "}
                            <a className="text-black text-sm" href="#">
                                Услуги{" "}
                            </a>{" "}
                            |{" "}
                            <a className="text-black text-sm" href="#">
                                Условия
                            </a>
                        </p>
                        <p className="text-slate-400 mb-5">
                            <a className="text-black text-sm" href="#">
                                Контакты
                            </a>{" "}
                            |{" "}
                            <a className="text-black text-sm" href="#">
                                Вставить{" "}
                            </a>{" "}
                            |{" "}
                            <a className="text-black text-sm" href="#">
                                Cписок покупок
                            </a>
                        </p>
                        <p className="text-slate-400">
                            <a className="text-black text-sm" href="#">
                                Корзина
                            </a>{" "}
                            |{" "}
                            <a className="text-black text-sm" href="#">
                                Личный кабинет{" "}
                            </a>{" "}
                            |{" "}
                            <a className="text-black text-sm" href="#">
                                Избранное
                            </a>
                        </p>
                    </div>
                    <div>
                        <strong className="text-lg font-bold mb-5 block">
                            Контакты
                        </strong>
                        <p className="block mb-5 text-sm">г.Минск</p>
                        <a
                            className="block mb-5 text-sm"
                            href="https://maps.app.goo.gl/Npz4xDMTLfuTtDAK6"
                            target="_blank">
                            Ул. Первомайская, Д. 1, Кв. 43
                        </a>
                        <a
                            className="block mb-5 text-sm"
                            href="tel:+3754348472884">
                            + 375 434 847 28 84
                        </a>
                        <a
                            className="block mb-5 text-sm"
                            href="tel:+3754484730948">
                            + 375 448 473 09 48
                        </a>
                        <a
                            className="block text-sm"
                            href="mailto:ikeaekspress@gmail.com">
                            ikeaekspress@gmail.com
                        </a>
                    </div>
                    <div className="flex items-end">
                        <a href="#">
                            <img src={instagram} alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
