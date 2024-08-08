import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsCartPlus } from "react-icons/bs";
import axios from "axios";
import "./Popular.css";

const API_URl = "https://dummyjson.com/products/category";

const Popular = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios
            .get(`${API_URl}/laptops?limit=4`)
            .then((res) => setProducts(res.data.products))
            .catch((err) => console.log(err));
    }, []);

    const productsLaptop = products?.map((item) => (
        <li
            className="good__item w-36 sm:w-72 relative pt-3 pb-16 border border-white transition-all rounded-3xl hover:bg-slate-50 hover:border hover:border-slate-200"
            key={item.id}>
            <img
                className="w-full h-40 sm:h-56 object-contain"
                src={item.images[0]}
                alt=""
            />
            <div className="px-3">
                <h3 className="mb-2 text-ellipsis overflow-hidden whitespace-nowrap max-w-full text-sm md:text-lg">
                    {item.title}
                </h3>
                <p
                    title={item.description}
                    className="text-xs md:text-base text-ellipsis overflow-hidden whitespace-nowrap max-w-full">
                    {item.description}
                </p>
                <p className="text-xs md:text-sm">117x190 см</p>
                <p className="text-xl md:text-3xl font-bold flex items-end gap-x-2">
                    {item.price} <p className="text-base">Br</p>
                </p>
            </div>
            <div className="flex w-full justify-between items-center px-3 absolute good__box">
                <select className="border rounded-3xl flex items-center">
                    <option value="1">1 шт.</option>
                    <option value="1">2 шт.</option>
                    <option value="1">3 шт.</option>
                </select>
                <button className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center">
                    <BsCartPlus className="text-2xl text-white" />
                </button>
            </div>
        </li>
    ));

    return (
        <section className="pb-12">
            <div className="container max-w-7xl mx-auto px-3 xl:px-0">
                <div className="flex items-center gap-x-2 mb-9">
                    <h2 className="text-xl font-bold sm:text-3xl">
                        Популярное
                    </h2>
                    <a href="#" className="text-sm font-normal">
                        Все товары в категории
                    </a>
                    <FaArrowRightLong />
                </div>
                <ul className="flex flex-wrap justify-between gap-y-4 md:justify-around">
                    {productsLaptop}
                </ul>
            </div>
        </section>
    );
};

export default Popular;
