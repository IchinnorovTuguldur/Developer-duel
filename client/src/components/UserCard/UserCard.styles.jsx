import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 45vw;
  height: 60vh;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const CardItemContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 270px;
`;