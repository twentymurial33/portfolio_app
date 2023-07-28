import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <BottomNavigation>
        <LinkedInIcon />
        <GitHubIcon />
        <EmailIcon />
      </BottomNavigation>
    </>
  );
}

const BottomNavigation = styled.div`
  height: 100px;
  color: white;
  padding: 20px 20px;
  margin: 40px 40px;
`;

export default Footer;
