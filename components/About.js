import styled from "styled-components";

function About() {
  return (
    <AboutSection>
      <Text>
        <h2>ABOUT</h2>
        Back in 2018, I decided to disrupt my life and dive into learning
        programming.
        <br />I enrolled to a coding bootcamp and there my journey started
        themes <br />
        and tumbled head first into the rabbit hole of coding and web
        development.
        <br /> Fast-forward to today, and had the privilege of building software
        for an advertising agency,
        <br />a start-up, a student-led design studio, and a huge corporation.
      </Text>
    </AboutSection>
  );
}

const Text = styled.p`
  font-size: 20px;
  color: white;
  text-align: center;
  font-family: Quicksand;
`;

const AboutSection = styled.div`
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
`;
export default About;
