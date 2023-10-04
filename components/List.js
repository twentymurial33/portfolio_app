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
          {/* <p style={{ color: "black", textAlign: "center" }}>Projects</p> */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Murials Menu" />
              <a href="https://github.com/twentymurial33"></a>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Aint Board" />
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
