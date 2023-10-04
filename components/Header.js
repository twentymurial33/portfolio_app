import React from "react";
import BasicList from "./List";
import { HeaderBar } from "./styled";
function Header() {
  return (
    <HeaderBar>
      <h1>
        <a href="/home">Murial Anindo</a>
      </h1>
      <h2>Software Developer</h2>

      <nav>
        <BasicList />
      </nav>
    </HeaderBar>
  );
}

export default Header;
