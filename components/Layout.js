import React from "react";
import Header from "./Header";
import Experiences from "./Experiences";
import About from "./About";
import Footer from "./Footer";
import Image from "next/image";
import { LayoutContainer } from "./styled";

function Layout() {
  return (
    <div>
      <LayoutContainer>
        <Header />
        <About />
        <hr></hr>
        <Experiences />
        <Footer />
      </LayoutContainer>
    </div>
  );
}

export default Layout;
