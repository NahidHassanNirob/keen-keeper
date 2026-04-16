import Image from "next/image";
import React from "react";
import logo from "@/assest/img/logo-xl.png";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#244D3F] text-white px-3 py-10 ">
      <div className="max-w-7xl mx-auto ">
        <div className="justify-center text-center flex flex-col">
          <div>
            <Image className="mx-auto" src={logo} alt="nav logo"></Image>
          </div>
          <p className="my-3 text-gray-400">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <div className="mx-auto space-y-2">
            <h2 className="my-3 text-gray-400">Social Link</h2>
            <div className="flex items-center gap-2 mx-auto">
              <FaInstagram />
              <FaLinkedin />
              <FaFacebook></FaFacebook>
              <FaGithub />
            </div>
          </div>
        </div>
        <hr className="text-gray-400 my-3" />
        <div className="flex flex-col sm:flex-row gap-4 justify-between text-gray-400">
            <h2>© 2026 KeenKeeper. All rights reserved.</h2>
            <div className="flex gap-5">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookies</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
