import React from "react";
import hero from "../assets/images/hero.png";
// import hero from "../assets/images/hero-showkat.png";
import {BsInstagram, BsFacebook, BsLinkedin, BsTwitter} from "react-icons/bs";

const Hero = () => { // const social_media = ["logo-instagram", "logo-facebook", "logo-linkedin", "logo-twitter",];
    const social_media = [
        {
            name: "logo-instagram",
            link: "https://www.instagram.com/showkatbinidris70/"
        }, {
            name: "logo-facebook",
            link: "https://www.facebook.com/salibinidris/"
        }, {
            name: "logo-linkedin",
            link: "https://www.linkedin.com/in/showkatbinidris/"
        }, {
        }, {
            name: "logo-github",
            link: "https://www.linkedin.com/in/showkatbinidris/"
        }, {
            name: "logo-twitter",
            link: "https://twitter.com/Showkat15815429/"
        }
    ];
    const menuLinks = [{
            name: "Contact me",
            link: "#contact"
        }];
    return (
        <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
            <div className="flex-1 flex items-center justify-center h-full">
                <img src={hero}
                    alt=""
                    className="md:w-3/4 object-cover"/>
            </div>
            <div className="flex-1">
                <div className="md:text-left text-center">
                    <h1 className="md:text-4xl text-2xl md:leading-normal leading-10 text-white font-bold">
                        <span className="text-cyan-600 md:text-5xl text-5xl">
                            Hello!
                            <br/>
                        </span>
                        My Name is
                        <span>{" "}Showkat</span>
                        <span className="text-cyan-600">
                            {" "}Ali</span>
                    </h1>
                    <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                        Front End Developer
                    </h4>
                    <button className="btn-primary mt-8 list-none">
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
                    <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">

                        <div className="hover:text-gray-600">
                            <a href="https://www.instagram.com/showkatbinidris70/"><BsInstagram/></a>
                        </div>
                        <div className="hover:text-gray-600">
                            <a href="https://www.facebook.com/salibinidris/"><BsFacebook/></a>
                        </div>
                        <div className="hover:text-gray-600">
                            <a href="https://www.linkedin.com/in/showkatbinidris/"><BsLinkedin/></a>
                        </div>
                        <div className="hover:text-gray-600">
                            <a href="https://twitter.com/Showkat15815429/"><BsTwitter/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
