import styled from "styled-components";
import SmallButton from "../Button/SmallButton";
import {
  CardContainer,
  CardItemContainer,
  TextContainer,
  InfoContainer,
} from "./UserCard.styles";

const BioText = styled.div`
  /* display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-self: center;
    align-items: center; */
  font-size: 14px;
  width: 10vw;
`;

const UserCard = ({
  username,
  name,
  location,
  titles,
  favLang,
  totalStar,
  highestCountStar,
  pubRepos,
  perRepos,
  followers,
  following,
  profile,
  bio,
  hasWon,
}) => {
  const StyledProfile = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
  `;

  return (
    <div>
      {hasWon ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <img src={"./winner.png"} alt="winner" />
        </div>
      ) : (
        <div style={{ height: "53px" }} />
      )}
      <CardContainer>
        <TextContainer>
          <StyledProfile src={profile} />
          <BioText>{bio}</BioText>
        </TextContainer>
        <CardItemContainer>
          <InfoContainer>
            <SmallButton>username</SmallButton>
            <text>{username}</text>
          </InfoContainer>
          <InfoContainer>
            <SmallButton>name</SmallButton>
            <text>{name}</text>
          </InfoContainer>
          <InfoContainer>
            <SmallButton>location</SmallButton>
            <text>{location}</text>
          </InfoContainer>
          <InfoContainer>
            <SmallButton>titles</SmallButton>
            <text>{titles}</text>
          </InfoContainer>
          <InfoContainer>
            <SmallButton>fav language</SmallButton>
            <text>{favLang}</text>
          </InfoContainer>
          <InfoContainer>
            <SmallButton>total stars</SmallButton>
            <text>{totalStar}</text>
          </InfoContainer>
          <InfoContainer>
            <SmallButton>highest star count</SmallButton>
            <text>{highestCountStar}</text>
          </InfoContainer>
          <InfoContainer>
            <SmallButton>public repos</SmallButton>
            <text>{pubRepos}</text>
          </InfoContainer>
          <InfoContainer>
            <SmallButton>perfect repos</SmallButton>
            <text>{perRepos}</text>
          </InfoContainer>
          <InfoContainer>
            <SmallButton>followers</SmallButton>
            <text>{followers}</text>
          </InfoContainer>
          <InfoContainer>
            <SmallButton>following</SmallButton>
            <text>{following}</text>
          </InfoContainer>
        </CardItemContainer>
      </CardContainer>
    </div>
  );
};

export default UserCard;
