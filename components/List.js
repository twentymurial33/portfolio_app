//import Box from "@mui/material/Box";
import styled from "styled-components";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function BasicList() {
  return (
    <Box sx={{}}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Murials Menu" />
              <a href="https://murialsmenu.netlify.app"></a>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Aint Board" />
              <a href="https://github.com/idiglove/oku-no-kumo-fe"></a>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

const Box = styled.div`
  background-color: #7d34eb;
  width: 30%;
  margin-left: 300px;
  color: white;
  text-align: center;
`;
