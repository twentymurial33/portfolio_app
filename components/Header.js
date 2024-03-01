import React from "react";
import Link from "@mui/material/Link";
import Fab from "@mui/material/Fab";
import { HeaderBar } from "./styled";
function Header() {
  return (
    <HeaderBar>
      <h1>Murial Anindo</h1>
      <h2>Software Developer</h2>
      <div style={{ marginLeft: "44%" }}>
        <Fab variant="extended" size="medium" color="primary" aria-label="add">
          <Link>
            <a
              href="https://murialsmenu.netlify.app"
              style={{ color: "white", textDecoration: "none" }}
            >
              Software Project
            </a>
          </Link>
        </Fab>
      </div>
    </HeaderBar>
  );
}

export default Header;
