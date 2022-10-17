import React from "react";
import Footer from "@/common/Footer";
import Header from "../common/Header";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "400px" }}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
