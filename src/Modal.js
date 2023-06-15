import React from "react";
import aboutme from "./aboutme.jpg";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Modal = ({ open, onClose }) => {
    if (!open) return null;

    const handleClose = (e) => {
        if (e.target.id === "wrapper") onClose();
    };


    return (
        <div className="bg-grey-600 dark:bg-grey-600 fixed inset-0 backdrop-blur-sm flex justify-center items-center min-h-[5vh] dark:text-gray-200">
            <div className="w-[600px] flex flex-col">
                <button
                    className=" text-xl place-self-end"
                    onClick={() => onClose(handleClose)}
                    id="wrapper"
                >
                    X
                </button>
                <div className="dark:bg-[#071125] bg-[#a9efcd] p-2 rounded text-xl text-center">
                    <img src={aboutme} alt="/" className="" />
                    <p>Hi </p>
                    <h1>My name is Tanmoy Si</h1>
                    <p>
                        I'm a full-stack developer specializing in building exceptional
                        digital experience. Currently, I'm focused on building responsive
                        full-stack web applications.
                    </p>
                    <div className="sm:mr-1 py-3">
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
        </div>
    );
};

export default Modal;
