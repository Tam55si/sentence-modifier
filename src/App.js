import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Modal from "./Modal";
import Footer from "./Footer";

function App() {
  let menuRef = useRef();
  const [openAbout, setOpenAbout] = useState(false);
  const [value, setValue] = useState("");
  const [heading, setHeading] = useState(
    "You can use this app to do any sentence changes you want"
  );
  const [theme, setTheme] = useState("light");
  const element = document.documentElement;

  useEffect(() => {
    // let handler = (e) => {
    //   if (!menuRef.current.contains(e.target)) {
    //     setOpenAbout(false);
    //   }
    let handler = () => {
      setOpenAbout(false);
    };


    document.addEventListener("mousedown", handler);

    // return () => {
    //   document.removeEventListener('mousedown', handler);
    // }
  });
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");

        break;

      default:
        element.classList.remove("dark");

        break;
    }
  }, [element.classList, theme]);

  const reverse = () => {
    let newText = value.split("").reverse().join("");
    setValue(newText);
    setHeading("Your Reversed sentence is");
  };
  const tolowerCases = () => {
    let caseL = value.toLowerCase();
    setValue(caseL);
    setHeading("Your Lowercased sentence is");
  };
  const toupperCases = () => {
    let caseU = value.toUpperCase();
    setValue(caseU);
    setHeading("Your Uppercased sentence is");
  };
  const toCapitalCases = () => {
    const capitalizeD = (str, lower = false) =>
      (lower ? str.toLowerCase() : str).replace(
        /(?:^|\s|["'([{])+\S/g,
        (match) => match.toUpperCase()
      );

    setValue(capitalizeD);
    setHeading("Your Capitalized sentence is");
  };
  const toClear = () => {
    setValue("");
    setHeading("You can use this app to do any sentence changes you want");
  };
  const toPrompt = () => {
    alert(value);
    setHeading("Your Data is prompted");
  };

  const btn = [
    {
      id: 1,

      text: "Press here to Reverse Value",
      clickV: reverse,
    },
    {
      id: 2,

      text: "Press here to Lowercase Value",
      clickV: tolowerCases,
    },
    {
      id: 3,

      text: "Press here to Prompt Value",
      clickV: toPrompt,
    },
    {
      id: 4,

      text: "Press here to Uppercase Value",
      clickV: toupperCases,
    },
    {
      id: 5,

      text: "Press here to Capitalized Value",
      clickV: toCapitalCases,
    },
    {
      id: 6,

      text: "Press here to Clear Text Area",
      clickV: toClear,
    },
  ];
  const options = [
    {
      icon: "sunny",
      txt: "light",
    },
    {
      icon: "moon",
      txt: "dark",
    },
  ];

  return (
    <>
      <div className=" bg-gradient-to-b from-green-50 via-[#95d5b6] to-green-400  dark:bg-gradient-to-b dark:from-[#16488F] dark:via-[#0C2144] dark:to-[#071125]">
        <div className="w-screen h-[50px] z-10 bg-green-100 fixed drop-shadow-lg dark:bg-[#071125]  dark:shadow-white-700">
          <div className="px-2 flex justify-between items-center w-full h-full">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold ml-4 sm:text-2xl dark:text-gray-200">
                Tanmoy
              </h1>
              <ul className=" md:flex sm:ml-2 ml-8">
                <button
                  className="border-none bg-transparent text-black mr-4 w-full px-3 dark:text-gray-200 "
                  ref={menuRef} onClick={() => setOpenAbout(true)}
                >
                  About Me
                </button>
              </ul>
            </div>
            <div className="sm:mr-1">
              <button className="border-none bg-transparent text-black mr-4 dark:text-gray-200 ">
                <a
                  href="https://github.com/Tam55si"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </button>
              <button className="border-none bg-transparent text-black mr-4 dark:text-gray-200 ">
                <a
                  href="https://www.linkedin.com/in/tanmoy-si-1a2329b4/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </button>
              <button className="border-none bg-transparent text-black mr-4 dark:text-gray-200 ">
                <a
                  href="https://twitter.com/tanmoy_si"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="py-4"></div>
        <div className="text-center py-4">
          <div className="text-center dark:text-gray-100 text-black">
            <h1 className="p-[35px] text-3xl">Hello Everyone</h1>
            <h2 className="p-[10px] text-3xl">Welcome to my Website</h2>
            <h2 className=" text-3xl">{heading}</h2>
            <div>
              {options.map((opt) => (
                <button
                  key={opt.txt}
                  className={`p-2 duration-100 leading-9   ${theme === opt.txt && "text-yellow-500 dark:text-yellow-300"
                    }`}
                  id="theme"
                  onClick={() => setTheme(opt.txt)}
                >
                  <ion-icon name={opt.icon}></ion-icon>
                </button>
              ))}
            </div>

            <br />
            <br />
          </div>

          <div>
            <input
              className="h-[100px] w-[400px] border rounded-xl overflow-hidden resize-none p-2 transition ease-in-out duration-300 text-center"
              placeholder="Type your text here"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </div>
          <div className=" w-full h-50">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-center w-full h-ful">
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
                {btn.map(({ id, text, clickV }) => (
                  <div key={id}>
                    <button
                      className="hover:scale-105 duration-500 py-2 rounded-lg bg-green-200 p-4 hover:bg-green-500 dark:bg-blue-300 dark:hover:bg-blue-600 dark:text-black focus:border-blue-500  focus:ring-blue-500 focus:outline-none "
                      type="button"
                      onClick={clickV}
                    >
                      {text}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={openAbout} onClose={() => setOpenAbout(false)} />
      <Footer />
    </>
  );
}

export default App;
