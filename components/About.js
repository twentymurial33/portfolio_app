import styled from "styled-components";

function About() {
  return (
    <AboutSection>
      <Text>
        Software Engineer with a background in Program Management.
        <br /> I fell in love with coding after several years supporting
        engineers build products.
        <br /> Spent the last 2 years honing my skills by working on open source
        and side projects using Javascript and its frameworks React and
        Typescript.
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
  padding-bottom: 40px;
  padding-top: 30px;
`;
export default About;
