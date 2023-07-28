import React from "react";
import BasicList from "./List";
import { HeaderBar } from "./styled";
function Header() {
  return (
    <HeaderBar>
      <h1>
        <a href="/home">Murial Anindo</a>
      </h1>
      <h2>Front End Developer</h2>
      <p>
        I build accessible, inclusive products and digital experiences for the
        web
      </p>
      <nav>
        <BasicList />
      </nav>
    </HeaderBar>
  );
}

export default Header;
