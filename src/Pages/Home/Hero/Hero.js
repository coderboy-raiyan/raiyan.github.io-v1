import React, { useState } from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { MdFindReplace, MdOutlineLocationOn } from "react-icons/md";

const Hero = () => {
  const [isOpend, setIsOpened] = useState(false);

  const handelClick = () => {
    setIsOpened(!isOpend);
  };

  return (
    <section className="container mx-auto">
      {/* main hero section */}
      <div className="flex max-w-6xl mx-auto flex-col my-6">
        {/* left side hero */}
        <div className="flex items-center justify-start flex-col lg:flex-row">
          <div className="rounded-full w-2/4 md:w-72 sm:w-72 lg:w-72 flex-shrink-0 mx-auto my-3 lg:mx-0 xl:mx-0">
            <img
              src="https://avatars.githubusercontent.com/u/76396442?v=4"
              alt=""
              className="rounded-full"
            />
          </div>
          {/* hero des */}
          <div className="lg:ml-10 xl:ml-10 text-center ml-0 lg:text-left xl:left">
            <h2 className="text-3xl font-bold">MD.Tajkier Haque Raiyan</h2>
            <h5 className="font-light text-gray-500 my-3">
              <span>
                <MdFindReplace size={20} className="inline" />
              </span>
              Learning and finding jobs
            </h5>
            <h5 className="font-light text-gray-800 text-tighter  my-3">
              Author of 44 ★️ javascript and React repo on GitHub
            </h5>
            <h5 className="font-light text-gray-800 text-tighter  my-3">
              <MdOutlineLocationOn className="inline" /> Dhaka, Bangladesh
            </h5>
            {/* tags */}
            <ul className="flex flex-row flex-wrap justify-center lg:justify-start xl:justify-start">
              <li className="hero-tags-li">
                <span className="hero-tags">JavaScript</span>
              </li>
              <li className="hero-tags-li">
                <span className="hero-tags">React</span>
              </li>
              <li className="hero-tags-li">
                <span className="hero-tags">Node js</span>
              </li>
              <li className="hero-tags-li">
                <span className="hero-tags">Express js</span>
              </li>
              <li className="hero-tags-li">
                <span className="hero-tags">Full Stack</span>
              </li>
            </ul>
            {/* Social media */}
            <ul className="flex flex-row flex-wrap my-3 justify-center lg:justify-start xl:justify-start">
              <li className="icons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/tajkier-haque"
                >
                  <BsLinkedin className="icon-hover" />
                </a>
              </li>
              <li className="icons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/coderboy-raiyan"
                >
                  <BsGithub className="icon-hover" />
                </a>
              </li>
              <li className="icons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/md_tajkier"
                >
                  <BsTwitter className="icon-hover" />
                </a>
              </li>

              {isOpend && (
                <>
                  <li className="icons">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/tajkierhaque/"
                    >
                      <BsFacebook className="icon-hover" />
                    </a>
                  </li>
                  <li className="icons">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/tajkier_haque/"
                    >
                      <BsInstagram className="icon-hover" />
                    </a>
                  </li>
                </>
              )}

              <p
                className="inline cursor-pointer text-xs my-auto"
                onClick={handelClick}
              >
                {isOpend ? "-less" : " +more"}
              </p>
            </ul>
          </div>
        </div>
        {/* Right Side hero */}
        <div>
          <h1>right</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;