import React from "react";
import { navbarlink } from "../../static";
import logo from "../../images/logo.svg";

const navbar = navbarlink?.map((e, index) => (
    <li key={index}>
        <a className="text-lg" href="#">
            {e}
        </a>
    </li>
));

const Header = () => {
    return (
        <header className="py-7 bg-slate-100">
            <div className="container max-w-7xl mx-auto px-3 xl:px-0">
                <div className="flex items-center justify-between">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                    <nav className="hidden lg:block">
                        <ul className="flex gap-x-8">{navbar}</ul>
                    </nav>
                    <div className="flex-col flex items-end">
                        <div className="items-center gap-x-2 hidden md:flex">
                            <a
                                className="text-xl font-normal"
                                href="tel:+3757364636472">
                                + 375 736 463 64 72
                            </a>
                            <p className="text-slate-400">/</p>
                            <a
                                className="text-xl font-normal"
                                href="tel:+3757364636472">
                                + 375 736 463 64 72
                            </a>
                        </div>
                        <p className="text-sm text-slate-400">
                            Заказать звонок
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
