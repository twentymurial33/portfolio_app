import React from "react";
import { HeaderBar } from "./styled";
function Header() {
  return (
    <HeaderBar>
      <h1>
        <a href="/home">Murial Anindo</a>
      </h1>
      <h2>Software Developer at Amazon</h2>
      <p>
        I build accessible, inclusive products and digital experiences for the
        web{" "}
      </p>
      <nav>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Experiences</li>
        </ul>
      </nav>
    </HeaderBar>
  );
}

export default Header;
