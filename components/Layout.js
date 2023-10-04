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
          width={227.77}
          height={150}
          left={50}
          right={50}
          alt="Ain't Board Logo"
        />

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
