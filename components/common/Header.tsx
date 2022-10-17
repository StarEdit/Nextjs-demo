import React from "react";
import Image from "next/image";

import { communicationLogo } from "public/communication-icons";

import styles from "@/styles/header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={`${cx("header")} bg-background text-white`}>
      <div className="flex flex-row justify-between items-center min-h-[44px] text-[12px]">
        <div className="flex flex-row justify-between items-center">
          <div className="mx-8">
            {Object.values(communicationLogo).map((item, index) => (
              <a
                className={cx("communicationImage")}
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <Image src={item.icon} alt="Logo" width={16} height={16} />
              </a>
            ))}
          </div>
          <div className=" leading-[44px]">
            Free shipping on all domestic orders with coupon code{" "}
            <span className="text-orange-400">“Watches2018”</span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="mr-6 px-6">Currentcy: USD</div>
          <div className="pl-6 pr-8">My Account</div>
        </div>
      </div>
      <hr style={{ borderColor: "#2d2d2d" }} />
      <div></div>
    </div>
  );
};

export default Header;
