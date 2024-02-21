import Head from "next/head";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
  AiOutlineMail,
  AiFillFacebook,
} from "react-icons/ai";
import Image from "next/image";
import gelyace from "../public/gel-notion2.svg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/orderly2.png";
import web2 from "../public/web2.png";
import web3 from "../public/sstep.png";
import web4 from "../public/iTeach.png";
import web5 from "../public/Home.svg";
import web6 from "../public/hatchitlol.png";
import ChatBot from "./ChatBot";
import NavigationMenu from "./NavigationMenu";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);



  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Angelica Zaragoza - Web Designer & Digital Marketer</title>
        <meta name="description" content="Passionate Web Designer and Digital Marketer creating visually stunning designs and seamless user experiences." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="web design, digital marketing, web development, UI/UX, graphic design" />
        <meta name="author" content="Angelica Zaragoza" />
        <meta property="og:title" content="Angelica Zaragoza - Web Designer & Digital Marketer" />
        <meta property="og:description" content="Passionate Web Designer and Digital Marketer creating visually stunning designs and seamless user experiences." />
        <meta property="og:image" content="/gel-notion2.svg" />
        <meta property="og:url" content="https://www.example.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gelzaragoza" />
        <meta name="twitter:title" content="Angelica Zaragoza - Web Designer & Digital Marketer" />
        <meta name="twitter:description" content="Passionate Web Designer and Digital Marketer creating visually stunning designs and seamless user experiences." />
        <meta name="twitter:image" content="/gel-notion2.svg" />
      </Head>

      <main className=" bg-white dark:bg-black">
        <div className="px-10 md:px-20 lg:px-20">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`absolute bg-dark dark:bg-white rounded-full animate-snow hover:scale-105`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
          <NavigationMenu darkMode={darkMode} setDarkMode={setDarkMode} />
          <section className=" min-h-screen m">
            <div className="text-center p-10">
              <div className="relative bg-transparent rounded-full  dark:bg-white mx-auto w-60 h-60 mb-10 md:w-96 md:h-96 overflow-hidden items-center max-w-full">
                <Image
                  src={gelyace}
                  layout="fill"
                  objectFit="cover"
                  alt="Angelica Zaragoza"
                />
              </div>
              <h2 className="text-5xl py-2 dark:text-white font-medium md:text-6xl">
                Angelica Zaragoza
              </h2>
              <h3 className="text-2xl md:text-3xl text-rose-600 font-semibold py-2 relative">
                  Web Designer & Digital Marketer{" "}
                  <span role="img" aria-label="wave">
                      👋
                  </span>
                  <span className="absolute top-0 right-0 h-full bg-white w-0 dark:bg-black animate-typing"></span>
                  <span className="absolute top-0 right-0 h-full flex items-center justify-center pr-2">
                  </span>
              </h3>
              <p className="text-md py-5 leading-8 dark:text-white md:text-xl max-w-xl mx-auto">
                Hello world! I&lsquo;m Gel, a passionate Web Designer and
                Digital Marketer who aspires to continuously learn software and design
                tools to enhance the web&lsquo;s usability one page at a time.
              </p>
              <p className="text-md py-5 leading-8 dark:text-white md:text-xl max-w-xl mx-auto">
                Dive into my tech journey below! </p>
            </div>
            <div className="flex justify-center gap-8 py-3 dark:text-rose-600">
              <a
                href="https://twitter.com/gelzaragoza"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <AiFillTwitterCircle className="text-3xl md:text-4xl lg:text-5xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/angelica-zaragoza/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <AiFillLinkedin className="text-3xl md:text-4xl lg:text-5xl" />
              </a>
              <a
                href="https://github.com/gelzaragoza"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <AiFillGithub className="text-3xl md:text-4xl lg:text-5xl" />
              </a>
              <a
                href="https://facebook.com/zaragozagel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <AiFillFacebook className="text-3xl md:text-4xl lg:text-5xl" />
              </a>
            </div>
          </section>
          <section>
            <div>
              <h3 className=" text-rose-500 text-2xl py-1 pt-5 font-mono font-bold">
                SERVICES I OFFER
              </h3>
              <p className=" text-md py-2 leading-8  dark:text-white">
                Throughout my journey in the tech industry, I have honed the
                skills to provide professional services for agencies and
                startups that encompass compelling design, seamless web
                development, and effective digital marketing. I specialize in
                crafting visually appealing designs, developing user-friendly
                websites, and curating engaging content for social media
                platforms.
              </p>
            </div>
            <div className="lg:flex gap-10 py-20">
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <div className="flex justify-center">
                  <Image
                    src={design}
                    width={100}
                    height={100}
                    alt="Design Image Description"
                  />
                </div>
                <h3 className="text-rose-600 dark:text-rose-600 text-2xl font-semibold pt-8 pb-2  ">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Crafting seamless and elegant designs suited to meet your specific requirements, following core design principles.
                </p>
                <div className="flex flex-wrap justify-center">
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    Figma
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    Photoshop
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    Illustrator
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    Canva
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    Webflow
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    Figma
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    Wordpress
                  </span>
                </div>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <div className="flex justify-center">
                  <Image
                    src={consulting}
                    width={100}
                    height={100}
                    alt="Consulting Image Description"
                  />
                </div>
                <h3 className="text-rose-600 dark:text-rose-600 text-2xl font-semibold pt-8 pb-2  ">
                  Marketing
                </h3>
                <p className="py-2">
                  Are you interested in feedback for your current project? I can
                  give you tips and tricks to level it up.
                </p>
                <div className="flex flex-wrap justify-center">
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    Meta Business Suite
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    Hubspot
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    Buffer
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    Adobe Creative Cloud
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    Google Apps for Business
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    TweetDeck
                  </span>
                </div>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <div className="flex justify-center">
                  <Image
                    src={code}
                    width={100}
                    height={100}
                    alt="Code Image Description"
                  />
                </div>
                <h3 className=" text-rose-600 dark:text-rose-600 text-2xl font-semibold pt-8 pb-2  ">
                  Code your dream project
                </h3>
                <p className="py-2">
                  Do you have an idea for your next great website? Let&lsquo;s
                  make it a reality.
                </p>
                <div className="flex flex-wrap justify-center">
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    React
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    NextJS
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    Tailwind
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    HTML/CSS
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    MongoDB
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    NodeJS
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    MUI
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    Git
                  </span>
                  <span className="text-sm bg-gray-100  text-rose-600 dark:text-rose-600 px-3 py-1 rounded-full mr-2 mb-2">
                    Azure DevOps
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20">
            <div>
              <h3 className="text-rose-500 text-2xl py-1 pt-5 font-mono font-bold">PORTFOLIO</h3>
              <p className="text-md py-2 leading-8 dark:text-white">
                Welcome to my digital gallery! Explore a curated collection showcasing the seamless blend of design and technology that fuels my passion. Each project is a testament to my dedication to creating visually stunning designs and seamless user experiences. Join me on this visual journey through my portfolio, a testament to my love for design and technology!{" "}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
              {/* Portfolio Items */}
              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow-lg">
                <Image
                  src={web1}
                  width={400}
                  height={300}
                  layout="responsive"
                  alt="Project 1 Description"
                />
              </div>
              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow-lg">
                <Image
                  width={100}
                  height={100}
                  layout="responsive"
                  src={web2}
                  alt="Project 2 Description"
                />
              </div>
              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow-lg">
                <Image
                  width={100}
                  height={100}
                  layout="responsive"
                  src={web3}
                  alt="Project 3 Description"
                />
              </div>
              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow-lg">
                <Image
                  width={100}
                  height={100}
                  layout="responsive"
                  src={web4}
                  alt="Project 4 Description"
                />
              </div>
              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow-lg">
                <Image
                  width={100}
                  height={100}
                  layout="responsive"
                  src={web5}
                  alt="Project 5 Description"
                />
              </div>
              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow-lg">
                <Image
                  width={100}
                  height={100}
                  layout="responsive"
                  src={web6}
                  alt="Project 6 Description"
                />
              </div>
            </div>
            <div className="text-center mt-10">
              <a
                href="https://drive.google.com/file/d/1ReJTCr6PNa2G3OkwQMjPtQ07BUCHDPqN/view"
                className="border border-rose-600 text-rose-600 px-6 py-3 rounded-md font-semibold hover:bg-rose-600 hover:text-white transition-colors duration-300"
              >
                See Portfolio
              </a>
            </div>
          </section>
        </div>
        <section className="bg-rose-500 text-white py-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Wanna work with me?</h2>
            <p className="text-lg">
              Feel free to contact me for any inquiries or collaborations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="mailto:mangelicazaragoza@gmail.com"
                className="inline-block px-6 py-3 bg-white text-rose-500 rounded-md hover:bg-rose-400 hover:text-white font-semibold"
              >
                <AiOutlineMail className="inline-block align-text-top" /> Send
                me an email
              </a>
              <a
                href="https://www.linkedin.com/in/angelica-zaragoza/"
                target="_blank"
                className="inline-block px-6 py-3 bg-white text-rose-500 rounded-md hover:bg-rose-400 hover:text-white font-semibold"
              >
                <AiFillLinkedin className="inline-block align-text-top" /> DM me
                on LinkedIn
              </a>
            </div>
          </div>
        </section>
        <ChatBot />
      </main>
    </div>
  );
}
