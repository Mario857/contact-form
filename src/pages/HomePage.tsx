import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Emoji, Hero } from "../components";
import LakeImg from "../images/italy-lake.jpg";

const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: 100%;
`;

const Title = styled.h1`
  padding: 8px 12px;
  letter-spacing: 4px;
  font-size: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  opacity: 0.5;
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
  font-size: 2rem;
  letter-spacing: 1px;
`;

const NavLink = styled(Link)`
  display: block;
  text-align: center;
  font-size: 2rem;
  text-decoration: none;
  color: white;
`;

export const HomePage = () => {
  return (
    <div>
      <Hero img={LakeImg}>
        <Section>
          <Title>Please Hire Me</Title>
          <Text>I want to visit this place again</Text>
          <NavLink to='/contact-form'>
            <Emoji symbol='👉' label='finger pointing right' />
            Contact form
          </NavLink>
        </Section>
      </Hero>
    </div>
  );
};
