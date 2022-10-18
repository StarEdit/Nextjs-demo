import React, { useState } from "react";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { communicationLogo } from "public/communication-icons";

import styles from "@/styles/header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type Props = {};

const CurrencyList = ["USD", "EUR", "GBP", "PKR", "CAD", "JPY"];
const AccountList = ["Sign In", "Register", "Wish List", "Cart"];

const Header = (props: Props) => {
  const [currency, setCurrency] = useState("USD");

  const [anchorElCurrency, setAnchorElCurrency] =
    React.useState<null | HTMLElement>(null);
  const [anchorElAccount, setAnchorElAccount] =
    React.useState<null | HTMLElement>(null);

  const openCurrency = Boolean(anchorElCurrency);
  const openAccount = Boolean(anchorElAccount);

  const handleClickCurrency = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCurrency(event.currentTarget);
  };

  const handleClickAccount = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAccount(event.currentTarget);
  };

  const handleCloseCurrency = (option: any) => {
    setAnchorElCurrency(null);

    if (typeof option === "string") {
      setCurrency(option);
    }
  };

  const handleCloseAccount = (option: any) => {
    setAnchorElAccount(null);

    if (typeof option === "string") {
      console.log(option);
    }
  };
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
          <div className="mr-6 px-6">
            <div
              className="flex justify-between items-center hover:cursor-pointer"
              onClick={handleClickCurrency}
            >
              Currency:
              <span className="pl-1 flex justify-between items-center hover:text-textColor">
                {currency}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 pl-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>

            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorElCurrency}
              open={openCurrency}
              onClose={handleCloseCurrency}
              classes={{ paper: "min-w-[140px] bg-backgroundSecond" }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {CurrencyList.map((option) => (
                <MenuItem
                  className="text-white text-[12px] hover:text-textColor"
                  divider
                  key={option}
                  selected={currency === option}
                  onClick={() => handleCloseCurrency(option)}
                  classes={{
                    root: "border-dividerColor",
                    selected: "text-textColor",
                  }}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <div className="pl-6 pr-8">
            <div
              className="flex justify-between items-center hover:cursor-pointer hover:text-textColor"
              onClick={handleClickAccount}
            >
              My Account
              <span className="pl-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>

            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorElAccount}
              open={openAccount}
              onClose={handleCloseAccount}
              classes={{ paper: "min-w-[140px] bg-backgroundSecond" }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {AccountList.map((option) => (
                <MenuItem
                  className="text-white text-[12px] hover:text-textColor"
                  divider
                  key={option}
                  onClick={() => handleCloseAccount(option)}
                  classes={{
                    root: "border-dividerColor",
                    selected: "text-textColor",
                  }}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </div>
      <Divider className="bg-dividerColor" />
      <div>Helllo</div>
    </div>
  );
};

export default Header;
