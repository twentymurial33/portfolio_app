import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <BottomNavigation>
        <LinkedInIcon />
        <GitHubIcon />
        <div>
          <p>
            Loosely designed in Figma and coded in Visual Studio Code by yours
            truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
            All text is set in the Inter typeface.
          </p>
        </div>
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
