import Head from "next/head";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
  AiOutlineMail,
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
          <section className=" min-h-screen m">
            <nav className="py-10 mb-12 flex justify-between dark:text-white flex-wrap gap-5">
              <h1 className="  text-lg font-mono">gelzaragoza</h1>
              <ul className=" flex justify-end items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                </li>
                <li>
                  <a
                    className=" dark:text-black dark:bg-white bg-black font-semibold text-white  hover:bg-rose-400 hover:text-white px-4 py-2 border-none rounded-md ml-8 block whitespace-nowrap"
                    href="https://drive.google.com/file/d/11ZNdkU5arm7eL8159Pf6jCdiOi5Ii6Nn/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="AngelicaResume.pdf"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10">
              <div className="relative bg-transparent rounded-full dark:bg-white mx-auto w-60 h-60 mb-10 md:w-96 md:h-96 overflow-hidden items-center max-w-full">
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
              <h3 className="text-2xl text-rose-600 py-2 md:text-3xl">
                Web Designer & Digital Marketer{" "}
                <span role="img" aria-label="wave">
                  👋
                </span>
              </h3>
              <p className="text-md py-5 leading-8 dark:text-white md:text-xl max-w-xl mx-auto">
                Hello world! I&lsquo;m Gel, a passionate Web Designer and
                Digital Marketer who aspires to continuously learn software and design
                tools to enhance the web&lsquo;s usability one page at a time.
              </p>
              <p className="py-5">Dive into my tech journey below! </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 dark:text-rose-600">
              <div className="text-5xl flex justify-center gap-16 py-3 dark:text-rose-600">
                <div className="text-5xl flex justify-center gap-16 py-3 dark:text-rose-600">
                  <a
                    href="https://twitter.com/gelzaragoza"
                    target="_blank"
                    className="hover:text-red-500"
                  >
                    <AiFillTwitterCircle />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/angelica-zaragoza/"
                    target="_blank"
                    className="hover:text-red-500"
                  >
                    <AiFillLinkedin />
                  </a>
                  <a
                    href="https://github.com/gelzaragoza"
                    target="_blank"
                    className="hover:text-red-500"
                  >
                    <AiFillGithub />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className=" text-rose-500 text-3xl py-1 pt-5 font-mono font-bold">
                SERVICES I OFFER
              </h3>
              <p className=" text-lg py-2 leading-8  dark:text-white">
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
                <div className="flex flex-wrap gap-4 dark:text-white text-rose-600 py-2 justify-center">
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      Figma
                    </h4>
                  </div>
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      Photoshop
                    </h4>
                  </div>
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      Illustrator
                    </h4>
                  </div>
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      Canva
                    </h4>
                  </div>
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      WebFlow
                    </h4>
                  </div>
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
                <div className="flex flex-wrap gap-4 dark:text-white text-rose-600 py-2 justify-center">
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      Meta Business Suite
                    </h4>
                  </div>
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      Hubspot
                    </h4>
                  </div>
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      Buffer
                    </h4>
                  </div>
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      Adobe Creative Cloud
                    </h4>
                  </div>
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      Google Apps for Business
                    </h4>
                  </div>
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      TweetDeck
                    </h4>
                  </div>
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
                <div className="flex flex-wrap gap-4 dark:text-white text-rose-600 py-2 justify-center">
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      React
                    </h4>
                  </div>
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      NextJS
                    </h4>
                  </div>
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      Tailwind
                    </h4>
                  </div>
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      Javascript
                    </h4>
                  </div>
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      HTML/CSS
                    </h4>
                  </div>
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      MongoDB
                    </h4>
                  </div>
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      NodeJS
                    </h4>
                  </div>
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      MUI
                    </h4>
                  </div>
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      Git
                    </h4>
                  </div>
                  <div className="dark:bg-white rounded-md p-2 shadow-md">
                    <h4 className="text-lg font-mono dark:text-rose-600">
                      Azure DevOps
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className=" text-rose-500 text-3xl py-1 pt-5 font-mono font-bold">PORTFOLIO</h3>
              <p className=" text-lg py-2 leading-8  dark:text-white">
                Welcome to my digital gallery! Explore a curated collection showcasing the seamless blend of design and technology that fuels my passion. Each project is a testament to my dedication to creating visually stunning designs and seamless user experiences. Join me on this visual journey through my portfolio, a testament to my love for design and technology!{" "}
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <div className="rounded-lg">
                  <Image
                    width={100}
                    height={100}
                    layout="responsive"
                    src={web1}
                    alt="Project 1 Description"
                  />
                </div>
              </div>
              <div className="basis-1/3 flex-1">
                <div className="rounded-lg">
                  <Image
                    width={100}
                    height={100}
                    layout="responsive"
                    src={web2}
                    alt="Project 2 Description"
                  />
                </div>
              </div>
              <div className="basis-1/3 flex-1">
                <div className="rounded-lg">
                  <Image
                    width={100}
                    height={100}
                    layout="responsive"
                    src={web3}
                    alt="Project 3 Description"
                  />
                </div>
              </div>
              <div className="basis-1/3 flex-1">
                <div className="rounded-lg">
                  <Image
                    width={100}
                    height={100}
                    layout="responsive"
                    src={web4}
                    alt="Project 4 Description"
                  />
                </div>
              </div>
              <div className="basis-1/3 flex-1">
                <div className="rounded-lg">
                  <Image
                    width={100}
                    height={100}
                    layout="responsive"
                    src={web5}
                    alt="Project 5 Description"
                  />
                </div>
              </div>
              <div className="basis-1/3 flex-1">
                <div className="rounded-lg">
                  <Image
                    width={100}
                    height={100}
                    layout="responsive"
                    src={web6}
                    alt="Project 6 Description"
                  />
                </div>
              </div>
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
