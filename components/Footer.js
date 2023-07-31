import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <BottomNavigation>
        <LinkedInIcon>
          <a href="/https://www.linkedin.com/in/murial-anindo/" />
        </LinkedInIcon>
        <GitHubIcon>
          <a href="/https://github.com/twentymurial33" />
        </GitHubIcon>
      </BottomNavigation>
    </>
  );
}

const BottomNavigation = styled.div`
  height: 100px;
  color: white;
  padding: 20px 20px;
  margin: 40px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Footer;
