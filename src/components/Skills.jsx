import React from "react";
import {BsInstagram, BsDatabase, BsLinkedin, BsTwitter} from "react-icons/bs";
import springBoot from "../assets/images/icons8-spring-boot-48.png";
import {SiSpringsecurity} from "react-icons/si";
import {FaReact} from "react-icons/fa";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import {Autoplay} from "swiper";
import {useState} from "react";

export default function Skills() {

    const skills = [
        {
            logo: "logo-html5",
            level: "Advance",
            count: 86
        }, {
            logo: "logo-css3",
            level: "Expect",
            count: 90
        }, {
            logo: "logo-nodejs",
            level: "Beginner",
            count: 40
        }, {
            logo: "logo-react",
            level: "Intermediate",
            count: 80
        }
    ];
    const [active, setActive] = useState(null);
    const langs = [
        {
            name: "Webflow",
            logo: "webflow",
            skill: "50%",
            color: "hue-rotate-[20deg]",
            text: "As a dedicated and skilled Webflow developer, I specialize in creating visually stunning and highly functional websites that blend aesthetics with usability. With a strong web design principles."
        },
        {
            name: "JavaScript",
            logo: "javascript",
            skill: "80%",
            color: "hue-rotate-[58deg]",
            text: "Javascript is my favorite scripting language. I have built some projects using JavaScript. I have faced many difficulties. I have clear knowledge about Array, Object, ES6 & Async."
        },
        {
            name: "React JS",
            logo: "react",
            skill: "70%",
            color: "hue-rotate-[225deg]",
            text: "React JS is my favorite javascript library. I have built some projects using React JS. I have clear knowledge about Hooks, JSX , Virtual DOM, One-way data binding & Component Based Architecture."
        },
        {
            name: "Webflow",
            logo: "webflow",
            skill: "50%",
            color: "hue-rotate-[225deg]",
            text: "As a dedicated and skilled Webflow developer, I specialize in creating visually stunning and highly functional websites that blend aesthetics with usability. With a strong web design principles."
        },
        {
            name: "HTML 5",
            logo: "html5",
            skill: "80%",
            color: "hue-rotate-[20deg]",
            text: "HTML5 is the latest version of Hypertext Markup Language. I have built some projects using HTML 5. I have sound knowledge about Semantic Elements, Canvas Elements, Responsive Images."
        },
        {
            name: "Webflow",
            logo: "webflow",
            skill: "50%",
            color: "hue-rotate-[20deg]",
            text: "As a dedicated and skilled Webflow developer, I specialize in creating visually stunning and highly functional websites that blend aesthetics with usability. With a strong web design principles."
        },
        {
            name: "css3",
            logo: "css3",
            skill: "80%",
            color: "hue-rotate-[240deg]",
            text: "CSS3, which stands for Cascading Style Sheets, is a stylesheet language. I have built some projects using CSS3. I have faced many difficulties. I have clear knowledge about flexbox, grid system."
        }, {
            name: "Bootstrap",
            logo: "vue",
            skill: "20%",
            color: "hue-rotate-[168deg]",
            text: "Bootstrap is my favorite front-end framework. I have built some projects using Bootstrap. I have clear knowledge about flex, grid system."
        }, {
            name: "SASS",
            logo: "sass",
            skill: "40%",
            color: "hue-rotate-[340deg]",
            text: "SASS (Syntactically Awesome Style Sheets) is a CSS preprocessor that extends the functionality of CSS."
        }, {
            name: "Tailwind CSS",
            logo: "tailwindv2",
            skill: "60%",
            color: "hue-rotate-[168deg]",
            text: "Tailwind CSS focuses on providing a vast collection of atomic utility classes that handle styling directly in the HTML markup."
        },
    ];
    return (


        <div>
            <section id="skills" className="py-10 bg-gray-800 relative">
                <div className="mt-8 text-gray-100 text-center">
                    <h3 className="text-4xl font-semibold">
                        My
                        <span className="text-cyan-600">
                            {" "}Skills</span>
                    </h3>
                    <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
                    <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
                        <div className="flex gap-10">
                            <div className="py-10 relative bg-gray-800 text-white flex items-center justify-center">
                                <div className="w-screen">
                                    <Swiper spaceBetween={10}
                                        slidesPerView={3}
                                        onSlideChange={
                                            (cur) => setActive(cur.realIndex)
                                        }
                                        loop={true}
                                        centeredSlides={true}
                                        speed={800}
                                        autoplay={
                                            {delay: 3000}
                                        }
                                        breakpoints={
                                            {
                                                375: {
                                                    slidesPerView: 1
                                                },
                                                575: {
                                                    slidesPerView: 2
                                                },
                                                768: {
                                                    slidesPerView: 3
                                                },
                                                991: {
                                                    slidesPerView: 3
                                                },
                                                1024: {
                                                    spaceBetween: 10,
                                                    slidesPerView: 3
                                                }
                                            }
                                        }
                                        modules={
                                            [Autoplay]
                                    }>
                                        {
                                        langs.map((lang, i) => (
                                            <SwiperSlide key={i}>
                                                <div className="h-96 flex">
                                                    <div className={
                                                        `card ${
                                                            active === i && "card-active"
                                                        } to-red-600/40 ${
                                                            lang.color
                                                        } border-red-600`
                                                    }>
                                                        <div className="logo">
                                                            <ion-icon name={
                                                                `logo-${
                                                                    lang.logo
                                                                }`
                                                            }></ion-icon>
                                                        </div>
                                                        <h2 className="lg:text-3xl md:text-2xl sm:text-xl mt-1 font-semibold">
                                                            {
                                                            lang.name
                                                        }</h2>
                                                        <p className="para text-justify">
                                                            {
                                                            lang.text
                                                        }</p>
                                                        <div className="bg-red-600 skill-level mb-2">
                                                            {
                                                            lang.skill
                                                        }</div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    } </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};
