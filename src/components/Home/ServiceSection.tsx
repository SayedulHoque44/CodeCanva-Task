import Image from "next/image";
import React from "react";
import svg1 from "@/assets/svg_1.png";
import svg2 from "@/assets/Screenshot_1.png";
import svg3 from "@/assets/Screenshot_2.png";

const ServiceSection = () => {
  const sections = [
    {
      img: svg1,
      title: "Tech SEO",
      info: "SEO audits,Core Web Vitals optimizations,Structured data implementations ,SEO migrations,Sitespeed audits",
    },
    {
      img: svg2,
      title: "Tracking",
      info: "GTM audits,server side tagging,GTM setup ,GA4 setup",
    },
    {
      img: svg3,
      title: "Dashboarding",
      info: "Marketing dashboards,Looker Studio setup",
    },
  ];
  return (
    <div className="py-20">
      <h1 className="font-semibold text-[48px] text-center my-2">
        Services Offered
      </h1>
      <p className="text-center">
        We will help a client&apos;s problems to develop the products they have{" "}
        <br />
        with high quality
      </p>
      {/*  */}
      <div className="flex flex-wrap justify-center gap-5 my-10">
        {sections.map((section, index) => (
          <div key={index} className="p-10 bg-[#000e1f] rounded-xl">
            <div className="flex gap-3">
              <div>
                <Image alt="img" src={section.img} height={200} width={200} />
              </div>
              <div>
                <ul className="flex flex-col gap-3">
                  {section.info.split(",").map((item) => (
                    <li key={item}>&gt; {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <h2 className="text-2xl font-semibold mt-3">{section.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
