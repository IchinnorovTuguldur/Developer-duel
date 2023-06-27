import styled from "styled-components";
import { StyledButton, Text } from "./components";
import { ReactSVG } from "react-svg";
import { Route } from "react-router-dom";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50vh;
`;
const Home = () => {
  return (
    <Container>
      <h1>Welcome to Dev-Duel</h1>
      <HomeContainer>
        <ButtonContainer>
          <a href="/inspect" style={{ textDecoration: "none" }}>
            <StyledButton>Inspect</StyledButton>
          </a>
          <Text>Look up a fellow dev's Github info.</Text>
        </ButtonContainer>
        <ReactSVG src="./SVG/Line.svg" />
        <ButtonContainer>
          <a href="/duel" style={{ textDecoration: "none" }}>
            <StyledButton>Duel</StyledButton>
          </a>
          <Text>Pick two devs to go head to head.</Text>
        </ButtonContainer>
      </HomeContainer>
    </Container>
  );
};

export default Home;
