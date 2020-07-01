import React from 'react'
import styled from "styled-components";

const HeroContainer = styled.div<{ img: string }>`
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Layer = styled.div`
  background: rgba(0%, 27.5%, 26.3%, 0.3);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

type Props = {
  img: string;
  children: React.ReactNode;
}

export const  Hero = (props: Props)  =>{
  const {img, children} = props;
  return (
    <HeroContainer img={img}>
      <Layer />
      {children}
    </HeroContainer>
  )
}

