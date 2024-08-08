import React from "react";
import herobg from "../../images/heriimg.png";

const Hero = () => {
    return (
        <section className="pt-12 pb-16">
            <div className="container max-w-7xl mx-auto px-3 xl:px-0">
                <div className="flex flex-col xl:flex-row  justify-between items-center gap-y-4">
                    <div className="pt-11 pb-16 pl-12 pr-14 rounded-3xl shadow inline-block">
                        <h1 className="text-3xl font-bold mb-8 md:text-5xl">
                            Мебель на <br /> любой вкус!
                        </h1>
                        <ul className="mb-9">
                            <li className="relative pl-3 text-sm md:text-lg before:bg-yellow-600 before:w-1 before:h-1 before:absolute before:left-0 before:rounded-sm before:top-3">
                                Худи, чашки для горячего чая и термосы
                            </li>
                            <li className="relative pl-3 text-sm md:text-lg before:bg-yellow-600 before:w-1 before:h-1 before:absolute before:left-0 before:rounded-sm before:top-3">
                                Eлочные игрушки, брелочки
                            </li>
                            <li className="relative pl-3 text-sm md:text-lg before:bg-yellow-600 before:w-1 before:h-1 before:absolute before:left-0 before:rounded-sm before:top-3">
                                Начало списка вещей, которые можно
                            </li>
                        </ul>
                        <div className="flex flex-col items-start">
                            <a
                                className="text-sm md:text-lg text-white py-3 px-16 rounded-3xl bg-yellow-500 mb-8"
                                href="#">
                                Перейти в каталог
                            </a>
                            <a
                                className="text-sm md:text-lg py-3 px-9 shadow rounded-3xl bg-slate-50"
                                href="#">
                                Внести список артикулов
                            </a>
                        </div>
                    </div>
                    <img src={herobg} alt="hero img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
