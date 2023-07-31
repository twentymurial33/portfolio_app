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
        <Image
          src="/background.jpg"
          alt="Image description"
          zIndex="0"
          width="1500"
          height="500"
        />

        <Header />
        <About />
        <Experiences />
        <Footer />
      </LayoutContainer>
    </div>
  );
}

export default Layout;
