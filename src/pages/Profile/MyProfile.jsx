import GameList from "../../components/GameList/GameList";
import AddGroup from "../../components/AddGroup/AddGroup";

const Profile = ({profile, handleAddGroup}) => {

  return (
    <>
      <h1>{profile.name}</h1>
      {/* Get all of the profiles games */}
      <AddGroup handleAddGroup={handleAddGroup} />
      <GameList games={profile.games} />
    </>
  );
}

export default Profile;