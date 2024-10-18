import Image from "next/image";
import React from "react";
import con1 from "@/assets/Screenshot_3.png";
import con2 from "@/assets/Screenshot_4.png";
import con3 from "@/assets/Screenshot_5.png";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
const ContactSection = () => {
  return (
    <div className="bg-[#000e1f] p-32 rounded-xl">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="col-span-1">
          <div className="flex gap-3 ">
            <Image alt="img" src={con1} height={40} width={40} />
            <h2 className="text-xl font-semibold">santolocorl</h2>
          </div>
          <p className="text-sm font-mono text-slate-400 mt-3">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual{" "}
          </p>
        </div>
        {/*  */}
        <div className="col-span-2">
          <h2 className="text-xl font-semibold mb-5">Contact & Information</h2>
          <div className="flex flex-wrap gap-10">
            <div className="flex gap-3">
              <Image alt="img" src={con2} height={40} width={60} />
              <div className="space-y-3">
                <h3 className="font-mono text-slate-400">Email Address</h3>
                <p>Santolocorl@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Image alt="img" src={con3} height={40} width={60} />
              <div className="space-y-3">
                <h3 className="font-mono text-slate-400">Phone Number</h3>
                <p>1-929-269-1487</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-[1px] bg-slate-400 mt-32 mb-10" />
      <div className="flex justify-between gap-4 text-slate-400 items-center">
        <h4>©santolocorl . All Right Reserved</h4>
        <div className="flex gap-3 items-center">
          <p>FOLLOW ME</p>
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
