import { FaLocationArrow } from "react-icons/fa6";
import React from "react";
import { socialMedia, companies, my_cv_link } from "@/data";
import MagicButton from "./ui/MagicButton";
import { LinkPreview } from "./ui/LinkPreview";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      {/* background grid */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/images/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Want to know <span className="text-purple">more</span>?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Check out my <LinkPreview url={my_cv_link} className="font-bold dark:text-purple">CV</LinkPreview> or contact me.
        </p>
        <a href="mailto:dk7405@g.rit.edu">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Devroop Kar <br></br> <span className="uppercase text-orange-500 font-bold">Rochester Institute of Technology</span>
          <br></br> 1 Lomb Memorial Drive <br></br> Rochester, NY 14623
        </p>

        <div className="flex flex-wrap items-center">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
                <a href={info.link} target="_blank">
                  <img src={info.img} alt="icons" width={20} height={20} />
                </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;