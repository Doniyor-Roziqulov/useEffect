import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { catlist } from "../../static";

const catigorylist = catlist?.map((e) => (
    <li
        className="w-36 md:w-60 bg-slate-50 shadow flex flex-col items-center gap-y-3 pt-5 rounded-3xl pb-3 px-3"
        key={e.id}>
        <img className="w-32 h-32 object-contain" src={e.img} alt="img" />
        <h3 className="text-sm md:text-lg">{e.title}</h3>
    </li>
));

const Catigory = () => {
    return (
        <section className="pb-16">
            <div className="container max-w-7xl mx-auto px-3 xl:px-0">
                <div className="flex items-center gap-x-7 mb-10">
                    <h2 className="text-xl font-bold sm:text-3xl">
                        Популярные категории
                    </h2>
                    <span className="flex items-center gap-x-1">
                        <a href="#" className="text-sm font-normal">
                            Все категории
                        </a>
                        <FaArrowRightLong />
                    </span>
                </div>
                <ul className="flex flex-wrap justify-center gap-y-6 gap-x-2 md:justify-between">
                    {catigorylist}
                </ul>
            </div>
        </section>
    );
};

export default Catigory;
