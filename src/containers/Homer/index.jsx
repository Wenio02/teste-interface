//import React from "react";
import HomeLogo from "../../assets/backgroundHome.svg";
import CategoryCarousel from "../../components/CategoryCarousel";
import { Container, HomeImg } from "./styles";

export function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo" />
      <CategoryCarousel />
    </Container>
  );
}
