import { useEffect, useState } from "react";
import styled from "styled-components";
import { Input, StyledButton, UserCard } from "./components";
import { inspectUser } from "./services/userService";

const InspectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 80vh;
`;

const Inspect = () => {
  
  const [user, setUser] = useState();
  const [username1, setUsername1] = useState();
  
  const favLang = user && user["favorite-language"];
  const highestCountStar = user && user["highest-starred"];
  const totalStars = user && user["total-stars"];
  const perRepos = user && user["perfect-repos"];
  const pubRepos = user && user["public-repos"];
  
  useEffect(() => {
    inspectUser(username1).then(setUser);
  }, []);

  const handleChangeUser1 = (event) => setUsername1(event.target.value);
  const handleIsnpect =  async () => {
    await inspectUser(username1).then(setUser);
  }

  return (
    <InspectContainer>
      <Input
          type="text"
          id="user1"
          name="user1"
          placeholder="username"
          onChange={handleChangeUser1}
        />
      <StyledButton
        onClick={handleIsnpect}
      >
        Inspect
      </StyledButton>
      {user ? (
        <UserCard
          username={user?.username}
          name={user?.name}
          location={user?.location}
          titles={user?.titles}
          followers={user?.followers}
          following={user?.following}
          profile={user?.avatar_url}
          bio={user?.bio}
          favLang={favLang}
          highestCountStar={highestCountStar}
          totalStar={totalStars}
          perRepos={perRepos}
          pubRepos={pubRepos}
        />
      ) : (
        <div></div>
      )}
    </InspectContainer>
  );
};

export default Inspect;
