import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Emoji, Hero } from "../components";
import LakeImg from '../images/italy-lake.jpg';

const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%);
  color: white;
  width: 100%;
`;

const Title = styled.h1`
  padding: 8px 12px;
  letter-spacing: 4px;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  opacity: 0.5;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

const Text = styled.p`
  text-align: center;
  font-size: 1rem;
  letter-spacing: 1px;
    @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const NavLink = styled(Link)`
  display: block;
  text-align: center;
  font-size: 1rem;
  text-decoration: none;
  color: white;
    @media (min-width: 768px) {
    font-size: 2rem;
  }
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
