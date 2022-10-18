import React from "react";
import Image from "next/image";

import styles from "@/styles/footer.module.scss";
import classNames from "classnames/bind";

import { communicationLogo } from "public/communication-icons";
import CustomProduct from "@/components/CustomProducts";
import Image1 from "public/product-image/CustomProduct-1.webp";
import Image2 from "public/product-image/CustomProduct-2.webp";

const cx = classNames.bind(styles);

type Props = {};

const Footer = (props: Props) => {
  const listCustomProduct = {
    0: { image: Image1.src, name: "Lenovo Ideacentre 300", price: "$116.00" },
    1: { image: Image2.src, name: "LeapFrog Epic", price: "$242.00" },
  };

  return (
    <footer className={`${cx("footer")} bg-background text-white`}>
      <div className="flex flex-row justify-between items-start py-14">
        <div className="basis-2/6 flex flex-col justify-between items-center">
          <div className="pb-8 text-[18px] font-semibold">About Us</div>
          <div className="flex-1">
            <div className="mb-4">
              Address :123 Main Street, Anytown, CA 12345 - USA.
            </div>
            <div className="mb-4">Phone :(012) 800 456 789</div>
            <div className="mb-4">Email :support@masstechnologist.com</div>
            <div className="pt-2">
              {Object.values(communicationLogo).map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className={cx("communicationImage")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={item.icon} alt="Logo" width={18} height={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="basis-1/6 flex flex-col justify-between items-center">
          <div className="pb-8 text-[18px] font-semibold">Main Menu</div>
          <div className={`flex-1 ${cx("listItem")}`}>
            <div>Home</div>
            <div>Catalog</div>
            <div>Collections</div>
            <div>Product</div>
          </div>
        </div>
        <div className="basis-1/6 flex flex-col justify-between items-center">
          <div className="pb-8 text-[18px] font-semibold">Connect</div>
          <div className={`flex-1 ${cx("listItem")}`}>
            <div>Home</div>
            <div>Catalog</div>
            <div>Collections</div>
            <div>Product</div>
          </div>
        </div>
        <div className="basis-2/6 flex flex-col justify-between items-center">
          <div className="pb-8 text-[18px] font-semibold">Custom Products</div>
          <div>
            {Object.values(listCustomProduct).map((item, index) => (
              <CustomProduct key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center py-12">
        Copyright &copy; 2018 MassTechnologist.Com. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
