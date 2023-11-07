import React from "react";
import hireMe from "../assets/images/hireMe.png";
const Hireme = () => {
    const menuLinks = [{
            name: "Say Hello",
            link: "#contact"
        }];
    return (
        <section id="hireme" className="py-10 px-3 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    Hire
                    <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
            </div>
            <div className="bg-gray-700 relative px-1 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
                <div>
                    <h2 className="text-2xl font-semibold">
                        Do you want any work from me?
                    </h2>
                    <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6 mr-1">
                        I am working at{" "}
                        <a href="https://www.nanoit.biz/">Nano Information Technology</a>
                        {" "}company as a Front end developer. At present this company is developing many Project. I am working here an e-commerce project as a front-end developer. Used technologies are "Laravel", "Node JS", "React JS" & "Mongo BD" In this project.
                    </p>
                    <button className="btn-primary mt-10 list-none">
                        {
                        menuLinks ?. map((menu, i) => (
                            <li key={i}
                                className="px-6 hover:text-gray-600">
                                <a href={
                                    menu ?. link
                                }>
                                    {
                                    menu ?. name
                                }</a>
                            </li>
                        ))
                    }</button>
                </div>
                <img src={hireMe}
                    alt=""
                    className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover pl-2"/>
            </div>
        </section>
    );
};

export default Hireme;
