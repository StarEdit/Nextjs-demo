import React, { useState } from "react";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import TextField from "@mui/material/TextField";

import CustomTextField from "./CustomTextField";

import { communicationLogo } from "public/communication-icons";
import Logo from "public/logo.webp";

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
      <div className="flex flex-row justify-between items-center h-[125px]">
        <div className="basis-2/5 flex flex-row justify-center items-center">
          <div className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#a8741a"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>
          <div className="text-textColor">
            <div>Call us </div>
            <div>Free Support: (012) 800 456 789</div>
          </div>
        </div>
        <div className="basis-1/5">
          <Image src={Logo} width={180} height={60} alt="logo" />
        </div>
        <div className="basis-2/5 flex flex-row justify-center items-center">
          <CustomTextField
            label="Search..."
            variant="outlined"
            className="mr-3"
          />

          <div className="border border-solid border-dividerColor p-3 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:stroke-textColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>

          <div className="border border-solid border-dividerColor p-3 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:stroke-textColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <div className="border border-solid border-dividerColor p-3">
            <div className="flex justify-between items-center w-20 h-6">
              <Badge
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                badgeContent={4}
                color="primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 hover:stroke-textColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </Badge>
              <div>$0.00</div>
            </div>
          </div>
        </div>
      </div>
      <Divider className="bg-dividerColor" />
    </div>
  );
};

export default Header;
