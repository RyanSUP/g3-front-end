import GameList from "../../components/GameList/GameList";
import AddGroup from "../../components/AddGroup/AddGroup";

const Profile = ({ profile, user, handleAddGroup }) => {

  return (
    <>

      <h1>{profile.name}</h1>
      <AddGroup handleAddGroup={handleAddGroup} />
      {/* Get all of the profiles games */}
      <GameList user={user} games={profile.games} />
    </>
  );
}

export default Profile;