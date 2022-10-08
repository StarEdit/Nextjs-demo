import React from "react";
import Image from "next/image";
import FacebookLogo from "public/communication-icons/facebook-icon.svg";
import TwitterLogo from "public/communication-icons/twitter-icon.svg";
import PinterestLogo from "public/communication-icons/pinterest-icon.svg";
import GoogleLogo from "public/communication-icons/google-icon.svg";
import InstagramLogo from "public/communication-icons/instagram-icon.svg";

import styles from "../../styles/footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type Props = {};

const Footer = (props: Props) => {
  const communicationLogo = {
    0: FacebookLogo,
    1: TwitterLogo,
    2: PinterestLogo,
    3: GoogleLogo,
    4: InstagramLogo,
  };

  return (
    <footer className={`${cx("footer")} bg-background text-white`}>
      <div className="flex flex-row justify-between align-middle pb-20">
        <div className="basis-2/6 flex flex-col justify-between align-middle">
          <div className="pb-8 text-[18px] font-semibold">About Us</div>
          <div className="flex-1">
            <div>Address :123 Main Street, Anytown, CA 12345 - USA.</div>
            <div>Phone :(012) 800 456 789</div>
            <div>Email :support@masstechnologist.com</div>
            <div className="pt-2">
              {Object.values(communicationLogo).map((item, index) => (
                <span key={index} className={cx("communicationImage")}>
                  <Image src={item} alt="Logo" width={30} height={30} />
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="basis-1/6 flex flex-col justify-between align-middle">
          <div className="pb-8 text-[18px] font-semibold">Main Menu</div>
          <div className="flex-1">
            <div>Home</div>
            <div>Catalog</div>
            <div>Collections</div>
            <div>Product</div>
          </div>
        </div>
        <div className="basis-1/6 flex flex-col justify-between align-middle">
          <div className="pb-8 text-[18px] font-semibold">Connect</div>
          <div className="flex-1">
            <div>Home</div>
            <div>Catalog</div>
            <div>Collections</div>
            <div>Product</div>
          </div>
        </div>
        <div className="basis-2/6 flex flex-col justify-between align-middle">
          <div className="pb-8 text-[18px] font-semibold">Custom Products</div>
          <div>Product 1</div>
          <div>Product 2</div>
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
