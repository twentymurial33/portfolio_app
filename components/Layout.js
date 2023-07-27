import React from "react";
import Header from "./Header";
import Experiences from "./Experiences";
import About from "./About";
import Footer from "./Footer";
import { LayoutContainer } from "./styled";

function Layout() {
  return (
    <div>
      <LayoutContainer>
        <Header />
        <About />
        <Experiences />
        <Footer />
      </LayoutContainer>
    </div>
  );
}

export default Layout;
