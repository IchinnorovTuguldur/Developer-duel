import styled from "styled-components";

export const Button = styled.div`
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 15vw;
  height: 6vh;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 40;
  font-size: 22px;
`;

export const StyledSmallButton = styled(Button)`
  justify-content: space-evenly;
  background-color: #e1f1ff;
  height: 25px;
  width: 100px;
  border-radius: 4px;
  font-size: 12px;
  box-shadow: 0px 0px;
  margin-right: 10px;
`;

export const BlueButton = styled(StyledSmallButton)`
  height: 5vh;
  width: 15vw;
  font-size: 20px;
  border-radius: 10px;
`
