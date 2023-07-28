import styled from "styled-components";

function About() {
  return (
    <AboutSection>
      <Text>
        <h2>ABOUT</h2>
        Back in 2018, I decided to disrupt my life and dive into learning
        programming.
        <br />I enrolled to a coding bootcamp and there my journey started
        there, I have since then continued with the journey
        <br />I have had experience experience in developing products using
        React.js while integrating with different tools and
        technologies.Experienced in driving internal process improvements across
        multiple teams and leveraging agile delivery methodologies
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
