import React from "react";
import Footer from "@/common/Footer";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
