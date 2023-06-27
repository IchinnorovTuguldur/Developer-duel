import { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledButton, UserCard, Input } from "./components";
import { duelUsers } from "./services/userService";

const DuelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  height: 80%;
  padding-top: 5vh;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 5vh;
  justify-content: space-around;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  padding-top: 8vh;
`;

const Duel = () => {
  const [user1, setUser1] = useState();
  const [user2, setUser2] = useState();
  const [username1, setUsername1] = useState();
  const [username2, setUsername2] = useState();

  useEffect(() => {
    duelUsers(username1, username2).then(([user1, user2]) => {
      setUser1(user1);
      setUser2(user2);
    });
  }, []);

  const handleChangeUser1 = (event) => setUsername1(event.target.value);
  const handleChangeUser2 = (event) => setUsername2(event.target.value);
  const handleDuel = async () => {
    await duelUsers(username1, username2).then(([user1, user2]) => {
      setUser1(user1);
      setUser2(user2);
    });
  };

  const favLang1 = user1 && user1["favorite-language"];
  const highestCountStar1 = user1 && user1["highest-starred"];
  const totalStars1 = user1 && user1["total-stars"];
  const perRepos1 = user1 && user1["perfect-repos"];
  const pubRepos1 = user1 && user1["public-repos"];

  const favLang2 = user2 && user2["favorite-language"];
  const highestCountStar2 = user2 && user2["highest-starred"];
  const totalStars2 = user2 && user2["total-stars"];
  const perRepos2 = user2 && user2["perfect-repos"];
  const pubRepos2 = user2 && user2["public-repos"];

  return (
    <DuelContainer>
      <UserContainer>
        <Input
          type="text"
          placeholder="username"
          id="user1"
          name="user1"
          onChange={handleChangeUser1}
        />
        <Input
          type="text"
          placeholder="username"
          id="user1"
          name="user1"
          onChange={handleChangeUser2}
        />
      </UserContainer>
      <StyledButton onClick={handleDuel}>Duel</StyledButton>
      <CardContainer>
        <UserCard
          hasWon={highestCountStar1 > highestCountStar2}
          username={user1?.username}
          name={user1?.name}
          location={user1?.location}
          followers={user1?.followers}
          profile={user1?.avatar_url}
          bio={user1?.bio}
          titles={user1?.titles}
          following={user1?.following}
          favLang={favLang1}
          highestCountStar={highestCountStar1}
          totalStar={totalStars1}
          perRepos={perRepos1}
          pubRepos={pubRepos1}
        />
        <UserCard
          hasWon={highestCountStar2 > highestCountStar1}
          username={user2?.username}
          name={user2?.name}
          location={user2?.location}
          followers={user2?.followers}
          profile={user2?.avatar_url}
          bio={user2?.bio}
          titles={user2?.titles}
          following={user2?.following}
          favLang={favLang2}
          highestCountStar={highestCountStar2}
          totalStar={totalStars2}
          perRepos={perRepos2}
          pubRepos={pubRepos2}
        />
      </CardContainer>
    </DuelContainer>
  );
};

export default Duel;
