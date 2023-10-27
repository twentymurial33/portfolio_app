import styled from "styled-components";
import List from "@mui/material/List";
import Link from "@mui/material/Link";
import Image from "next/image";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";

export default function BasicList() {
  return (
    <Box sx={{}}>
      <List>
        <Image />
        <Button>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
            style={{ marginRight: "300px" }}
          >
            <Link>
              <a
                href="https://murialsmenu.netlify.app"
                style={{ color: "white", textDecoration: "none" }}
              >
                Murials Menu
              </a>
            </Link>
          </Fab>
        </Button>
        <Button>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
            style={{ marginRight: "300px" }}
          >
            <Link>
              <a
                href="https://github.com/idiglove/oku-no-kumo-fe"
                style={{ color: "white", textDecoration: "none" }}
              >
                Aint board
              </a>
            </Link>
          </Fab>
        </Button>
      </List>
    </Box>
  );
}

const Box = styled.div`
  background-color: #7d34eb;
  width: 10%;
  margin-left: 300px;
  color: white;
  text-align: center;
  display: flex;
`;
