var w=Object.defineProperty,N=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var p=(s,t,r)=>t in s?w(s,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[t]=r,g=(s,t)=>{for(var r in t||(t={}))S.call(t,r)&&p(s,r,t[r]);if(h)for(var r of h(t))j.call(t,r)&&p(s,r,t[r]);return s},x=(s,t)=>N(s,k(t));import{j as a,a as e,B as _,b as C,c as A,d as I,r as d,S as f,A as b,e as u,P as M,R as B,f as P}from"./vendor.097ff65b.js";const E=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}};E();var T="/assets/hero.d860fa8e.png";const L=()=>{const s=[{name:"Contact me",link:"#contact"}];return a("section",{id:"home",className:"min-h-screen flex py-10 md:flex-row flex-col items-center",children:[e("div",{className:"flex-1 flex items-center justify-center h-full",children:e("img",{src:T,alt:"",className:"md:w-3/4 object-cover"})}),e("div",{className:"flex-1",children:a("div",{className:"md:text-left text-center",children:[a("h1",{className:"md:text-4xl text-2xl md:leading-normal leading-10 text-white font-bold",children:[a("span",{className:"text-cyan-600 md:text-5xl text-5xl",children:["Hello!",e("br",{})]}),"My Name is",a("span",{children:[" ","Showkat"]}),a("span",{className:"text-cyan-600",children:[" ","Ali"]})]}),e("h4",{className:"md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600",children:"Front End Developer"}),e("button",{className:"btn-primary mt-8 list-none",children:s==null?void 0:s.map((t,r)=>e("li",{className:"px-6 hover:text-gray-600",children:e("a",{href:t==null?void 0:t.link,children:t==null?void 0:t.name})},r))}),a("div",{className:"mt-8 text-3xl flex items-center md:justify-start justify-center gap-5",children:[e("div",{className:"hover:text-gray-600",children:e("a",{href:"https://www.instagram.com/showkatbinidris70/",children:e(_,{})})}),e("div",{className:"hover:text-gray-600",children:e("a",{href:"https://www.facebook.com/salibinidris/",children:e(C,{})})}),e("div",{className:"hover:text-gray-600",children:e("a",{href:"https://www.linkedin.com/in/showkatbinidris/",children:e(A,{})})}),e("div",{className:"hover:text-gray-600",children:e("a",{href:"https://twitter.com/Showkat15815429/",children:e(I,{})})})]})]})})]})};var O="/assets/about.74fd2ab0.png";const D=()=>e("section",{id:"about",className:"py-10 text-white",children:a("div",{className:"text-center mt-8",children:[a("h3",{className:"text-4xl font-semibold",children:["About",a("span",{className:"text-cyan-600",children:[" ","Me"]})]}),e("p",{className:"text-gray-400 my-3 text-lg",children:"My introduction"}),a("div",{className:"flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto",children:[e("div",{className:"p-2",children:a("div",{className:"text-gray-300 my-3",children:[e("p",{className:"text-justify leading-7 w-11/12 mx-auto",children:"A passionate programmer with 3 years of experience and a team player with a can-do attitude. Fascinated by technologies such as Front End Development. Always willing to take ownership of the core components of a project and have a mindset."}),a("div",{className:"flex mt-10 items-center gap-7",children:[[{text:"Years experience",count:"03"},{text:"Completed Projects",count:"20"},{text:"Companies Work",count:"03"}].map(t=>a("div",{children:[a("h3",{className:"md:text-4xl text-2xl font-semibold text-white",children:[t.count,e("span",{className:"text-cyan-600",children:"+"})," "," "]}),e("span",{className:"md:text-base text-xs",children:t.text})]},t.text))," "]}),e("br",{}),e("br",{}),e("a",{href:"https://showkatcv.netlify.app/src/assets/font-end.pdf",target:"_blank",children:e("button",{className:"btn-primary",children:"Download CV"})})]})}),e("div",{className:"flex-1 md:mt-0 mt-6 flex justify-center items-center",children:e("div",{className:"lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ",children:e("img",{src:O,alt:"",className:"w-full object-cover bg-cyan-600 rounded-xl"})})})]})]})});function H(){const[s,t]=d.exports.useState(null);return e("div",{children:e("section",{id:"skills",className:"py-10 bg-gray-800 relative",children:a("div",{className:"mt-8 text-gray-100 text-center",children:[a("h3",{className:"text-4xl font-semibold",children:["My",a("span",{className:"text-cyan-600",children:[" ","Skills"]})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My knowledge"}),e("div",{className:"flex items-center justify-center mt-12 gap-10 flex-wrap",children:e("div",{className:"flex gap-10",children:e("div",{className:"py-10 relative bg-gray-800 text-white flex items-center justify-center",children:e("div",{className:"w-screen",children:a(f,{spaceBetween:10,slidesPerView:3,onSlideChange:n=>t(n.realIndex),loop:!0,centeredSlides:!0,speed:800,autoplay:{delay:3e3},breakpoints:{375:{slidesPerView:1},575:{slidesPerView:2},768:{slidesPerView:3},991:{slidesPerView:3},1024:{spaceBetween:10,slidesPerView:3}},modules:[b],children:[[{name:"JavaScript",logo:"javascript",skill:"80%",color:"hue-rotate-[58deg]",text:"Javascript is my favorite scripting language. I have built some projects using JavaScript. I have faced many difficulties. I have clear knowledge about Array, Object, ES6 & Async."},{name:"React JS",logo:"react",skill:"70%",color:"hue-rotate-[225deg]",text:"React JS is my favorite javascript library. I have built some projects using React JS. I have clear knowledge about Hooks, JSX , Virtual DOM, One-way data binding & Component Based Architecture."},{name:"HTML 5",logo:"html5",skill:"80%",color:"hue-rotate-[20deg]",text:"HTML5 is the latest version of Hypertext Markup Language. I have built some projects using HTML 5. I have sound knowledge about Semantic Elements, Canvas Elements, Responsive Images."},{name:"css3",logo:"css3",skill:"80%",color:"hue-rotate-[240deg]",text:"CSS3, which stands for Cascading Style Sheets, is a stylesheet language. I have built some projects using CSS3. I have faced many difficulties. I have clear knowledge about flexbox, grid system."},{name:"Bootstrap",logo:"vue",skill:"20%",color:"hue-rotate-[168deg]",text:"Bootstrap is my favorite front-end framework. I have built some projects using Bootstrap. I have clear knowledge about flex, grid system."},{name:"SASS",logo:"sass",skill:"40%",color:"hue-rotate-[340deg]",text:"SASS (Syntactically Awesome Style Sheets) is a CSS preprocessor that extends the functionality of CSS."},{name:"Tailwind CSS",logo:"tailwindv2",skill:"60%",color:"hue-rotate-[168deg]",text:"Tailwind CSS focuses on providing a vast collection of atomic utility classes that handle styling directly in the HTML markup."}].map((n,i)=>e(u,{children:e("div",{className:"h-96 flex",children:a("div",{className:`card ${s===i&&"card-active"} to-red-600/40 ${n.color} border-red-600`,children:[e("div",{className:"logo",children:e("ion-icon",{name:`logo-${n.logo}`})}),e("h2",{className:"lg:text-3xl md:text-2xl sm:text-xl mt-1 font-semibold",children:n.name}),e("p",{className:"para text-justify",children:n.text}),e("div",{className:"bg-red-600 skill-level mb-2",children:n.skill})]})})},i))," "]})})})})})]})})})}var R="/assets/project-1.d877c53a.png",J="/assets/academic.d34dc979.png",V="/assets/e-trade.8c2dad8f.png",F="/assets/project-4.b51c2249.png",$="/assets/project-5.2d56073c.png",Y="/assets/project-6.06647d66.png",z="/assets/project-7.549800d6.png",q="/assets/project-8.10e40efa.png",G="/assets/project-9.6059bce1.png",K="/assets/project-10.d9ab212b.png",U="/assets/project_person1.d091e61c.png";const W=()=>a("section",{id:"projects",className:"py-10 text-white",children:[a("div",{className:"text-center",children:[a("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Projects"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My awesome works"})]}),e("br",{}),a("div",{className:"flex max-w-6xl gap-6 px-5 mx-auto items-center relative",children:[e("div",{className:"lg:w-2/3 w-full",children:e(f,{slidesPerview:1.2,spaceBetween:20,breakpoints:{768:{slidesPerView:2}},loop:!0,autoplay:{delay:3e3},pagination:{clickable:!0},modules:[M,b],children:[{img:R,name:"Theme Development",github_link:"https://github.com/showkatbinidris70/nano-Elite-Steel-html-css",live_link:"https://nano-elite-steel-html-css.vercel.app/"},{img:K,name:"Noipunno Landing Page",github_link:"https://github.com/showkatbinidris70/noipunno-landing-page",live_link:"https://noipunno-landing-page.vercel.app/"},{img:J,name:"Academic Website",github_link:"https://github.com/showkatbinidris70/dskm",live_link:"https://dskm-home-page-design.netlify.app/"},{img:F,name:"Sonargaon Library",github_link:"https://github.com/showkatbinidris70/nanosoft-sonargaon-library",live_link:"https://nanosoft-sonargaon-library.vercel.app/"},{img:z,name:"e-commerce template Ekshop",github_link:"https://charming-pothos-aa55b8.netlify.app/",live_link:"https://charming-pothos-aa55b8.netlify.app/"},{img:V,name:"Agro Farm",github_link:"https://github.com/showkatbinidris70/nanosoft-first-task-agro",live_link:"https://nanosoft-first-task-agro-farm.vercel.app/"},{img:$,name:"e-learning",github_link:"https://github.com/Sridhar-C-25",live_link:"https://stellular-starlight-8558fc.netlify.app/"},{img:Y,name:"e-commerce template",github_link:"https://github.com/showkatbinidris70/nano-e-commerce-template-react",live_link:"https://visionary-buttercream-1ed34f.netlify.app/"},{img:q,name:"Debate Management System",github_link:"https://github.com/showkatbinidris70/nano-debate-management-figma-to-html",live_link:"https://nano-debate-management-figma-to-html.vercel.app/"},{img:G,name:"Bangladesh Railway Police",github_link:"https://github.com/showkatbinidris70/nano-bd-railway-police-figma-to-html",live_link:"https://nano-bd-railway-police-figma-to-html.vercel.app/"}].map((t,r)=>e(u,{children:a("div",{className:"h-fit w-full p-4 bg-slate-700 rounded-xl",children:[e("img",{src:t.img,alt:"",className:"rounded-lg"}),e("h3",{className:"text-xl my-4",children:t.name}),a("div",{className:"flex gap-3",children:[e("a",{href:t.github_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Github"}),e("a",{href:t.live_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Live Demo"})]})]})},r))})}),e("div",{className:"lg:block hidden",children:e("img",{src:U,alt:""})})]})]});var X="/assets/hireMe.1542b756.png";const Q=()=>{const s=[{name:"Say Hello",link:"#contact"}];return a("section",{id:"hireme",className:"py-10 px-3 text-white",children:[a("div",{className:"text-center",children:[a("h3",{className:"text-4xl font-semibold",children:["Hire",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"Do you have any work?"})]}),a("div",{className:"bg-gray-700 relative px-1 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center",children:[a("div",{children:[e("h2",{className:"text-2xl font-semibold",children:"Do you want any work from me?"}),a("p",{className:"lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6 mr-1",children:["I am working at"," ",e("a",{href:"https://www.nanoit.biz/",children:"Nano Information Technology"})," ",'company as a Front end developer. At present this company is developing many Project. I am working here an e-commerce project as a front-end developer. Used technologies are "Laravel", "Node JS", "React JS" & "Mongo BD" In this project.']}),e("button",{className:"btn-primary mt-10 list-none",children:s==null?void 0:s.map((t,r)=>e("li",{className:"px-6 hover:text-gray-600",children:e("a",{href:t==null?void 0:t.link,children:t==null?void 0:t.name})},r))})]}),e("img",{src:X,alt:"",className:"lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover pl-2"})]})]})},Z=()=>{const s=[{logo:"mail",text:"showkatbinidris70@gmail.com"},{logo:"logo-whatsapp",text:"+8801572133260"},{logo:"location"}],[t,r]=d.exports.useState({}),[n,i]=d.exports.useState(),l=o=>{const m=o.target.name,v=o.target.value;r(y=>x(g({},y),{[m]:v}))};return e("section",{id:"contact",className:"py-10 px-3 text-white",children:a("div",{className:"text-center mt-8",children:[a("h3",{className:"text-4xl font-semibold",children:["Contact",a("span",{className:"text-cyan-600",children:[" ","Me"]})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"Get in touch"}),a("div",{className:"mt-16 flex md:flex-row flex-col\r gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto",children:[a("form",{className:"flex flex-col flex-1 gap-5",onSubmit:o=>{o.preventDefault(),console.log(t)},action:"mailto:showkatbinidris70@gmail.com",children:[e("input",{type:"text",name:"name",value:t.name||"",onChange:l,placeholder:"Your Name"}),e("input",{type:"Email",name:"email",value:t.email||"",onChange:l,placeholder:"Your Email Address"}),e("textarea",{placeholder:"Your Message",name:"textarea",value:n,onChange:l,rows:10}),e("button",{type:"submit",className:"btn-primary w-fit",children:e("a",{href:"mailto:showkatbinidris70@gmail.com",children:"Send Message"})})]}),a("div",{className:"flex flex-col  gap-7 ",children:[s.map((o,m)=>a("div",{className:"flex flex-row\r text-left gap-4 flex-wrap items-center",children:[e("div",{className:"min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full",children:e("ion-icon",{name:o.logo})}),a("p",{className:"md:text-base text-sm  break-words",children:[o.text," "]})]},m)),e("div",{className:"google-map-code",style:{marginLeft:"4rem",marginTop:"-4rem"},children:e("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747016.782524042!2d87.70378100186713!3d23.48944602204458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1686305482213!5m2!1sen!2sbd",width:"180",height:"120",frameborder:"0",style:{border:0},allowfullscreen:"","aria-hidden":"false",tabindex:"0"})})]})]})]})})},ee=()=>a("div",{className:"bg-gray-800 text-sm p-4 text-center text-white",children:["Copyright \xA9 2023",a("span",{className:"text-cyan-600 md:text-1xl text-1xl",children:[" ","Showkat Ali"]})," "," Rights reserved."]}),te=()=>{const[s,t]=d.exports.useState(!1),[r,n]=d.exports.useState(!1),i=[{name:"HOME",link:"#home"},{name:"ABOUT",link:"#about"},{name:"SKILLS",link:"#skills"},{name:"PROJECTS",link:"#projects"},{name:"CONTACT",link:"#contact"}];return d.exports.useEffect(()=>{window.addEventListener("scroll",()=>{document.querySelector("nav"),window.scrollY>0?t(!0):t(!1)})},[]),e("nav",{className:`fixed w-full left-0 top-0 z-[999] ${s?"bg-black  text-white":"text-cyan-600"}`,children:a("div",{className:"flex items-center justify-between",children:[e("div",{className:"mx-7",children:a("h4",{className:"lg:text-3xl md:text-2xl uppercase font-bold",children:[e("span",{className:"text-white",children:"Showkat"})," ","Ali"]})}),e("div",{className:` ${s?"md:bg-white/0 bg-white":"bg-white"} text-slate-500 md:block hidden px-7 py-2 font-medium  rounded-bl-full`,children:a("ul",{className:"flex items-center gap-1 py-2 text-lg",children:[i==null?void 0:i.map((l,c)=>e("li",{className:"px-6 hover:text-cyan-600",children:e("a",{href:l==null?void 0:l.link,children:l==null?void 0:l.name})},c))," "]})}),e("div",{onClick:()=>n(!r),className:`z-[999]  ${r?"text-gray-900":"text-gray-100"} text-3xl md:hidden m-5`,children:e("ion-icon",{name:"menu"})}),e("div",{className:`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${r?"right-0":"right-[-100%]"}`,children:a("ul",{className:"flex flex-col justify-center h-full gap-10 py-2 text-lg",children:[i==null?void 0:i.map((l,c)=>e("li",{onClick:()=>n(!1),className:"px-6 hover:text-cyan-600",children:e("a",{href:l==null?void 0:l.link,children:l==null?void 0:l.name})},c))," "]})})]})})},ae=()=>e("div",{className:"fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce",children:e("a",{href:"https://web.whatsapp.com/",target:"_blank",children:e("ion-icon",{name:"chatbubble-ellipses"})})}),le=()=>a("div",{children:[e(te,{}),e(ae,{}),e(L,{}),e(D,{}),e(H,{}),e(Q,{}),e(W,{}),e(Z,{}),e(ee,{})]});B.render(e(P,{children:e(le,{})}),document.getElementById("root"));
