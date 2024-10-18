import Image from "next/image";
import React from "react";

const ConsultancySection = () => {
  return (
    <div className="p-32 grid grid-cols-1 md:grid-cols-2 items-center gap-5 mt-30">
      <div>
        <h1 className="text-4xl font-bold mb-2">let&apos;s talk</h1>
        <p className="">
          Do you have some questions? Want to grab a coffee? <br /> Plan a call
          with the button below
        </p>
        <button className="py-3 px-8 text-center bg-[#0096FB] rounded-[12px] mt-3">
          Book an Consultancy
        </button>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={
            "https://s3-alpha-sig.figma.com/img/441b/2854/323bc5ddbd649a791e5cf679e41be12c?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bnyIcsa6N0zYONkg0gyXACh0Y25M4eAMWVrEYCZTMZjhtx3Dp6CYYq~0MCAsAGIVAR9xyY8AqnIXRAoqtUYdf4wKLIRLAAtrEen8TDAsa2Bs3jwmB3lkrD9maM9YOJh5aCepS6eX9UP-hvH8bdU0AMjXN7MVTsMy9MH1nkBc7SYXf9WVhQ4sFOu08AMeN46dCHUHVzBGazGgwNnRmkrTdd~x7hPokkffYZcuLqVa1BLIovMNje5D3XHY5auZHvc8d56wLWMHbG7US5jpgZYU6KjP0xAFChKN2UeDQdS77f8BPt8cfGwRrS7iUBIcWv3NBU-Qu6m2FeNNrZpygL3SyQ__"
          }
          alt="img"
          height={600}
          width={600}
        />
      </div>
    </div>
  );
};

export default ConsultancySection;
