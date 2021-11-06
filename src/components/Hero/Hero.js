import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>This is my personal portfolio website.</SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
