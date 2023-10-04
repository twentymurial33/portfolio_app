import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

export default function Experiences() {
  return (
    <List sx={{ maxWidth: 440 }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <Typography sx={{ display: "inline" }}>
              JAN 2022 - PRESENT | Senior Program Manager
            </Typography>
          }
        />
        <Fab variant="extended" size="medium" color="primary" aria-label="add">
          React
        </Fab>
        <Fab variant="extended" size="medium" color="primary" aria-label="add">
          CSS
        </Fab>
        <Box sx={{ "& > :not(style)": { m: 1 } }}></Box>
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              MARCH 2020-FEB 2022 | Junior Front-End Developer
            </Typography>
          }
        />
        <Fab variant="extended" size="medium" color="primary" aria-label="add">
          React
        </Fab>
        <Fab variant="extended" size="medium" color="primary" aria-label="add">
          React
        </Fab>
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              FEB 2019-JULY 2020 | Technical Program Manager
            </Typography>
          }
        />
        <Fab variant="extended" size="medium" color="primary" aria-label="add">
          React
        </Fab>
        <Fab variant="extended" size="medium" color="primary" aria-label="add">
          React
        </Fab>
      </ListItem>
    </List>
  );
}

const List = styled.div`
  background: rgb(15 23 42);
`;

const Typography = styled.p`
  color: white;
  margin-left: 600px;
`;
