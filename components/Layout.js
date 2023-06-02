import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutContainer } from "./styled";

function Layout() {
  return (
    <div>
      <LayoutContainer>
        <Header />
        <Footer />
      </LayoutContainer>
    </div>
  );
}

export default Layout;
