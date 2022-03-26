import GameList from "../../components/GameList/GameList";

const Profile = ({ profile, user }) => {

  return (
    <>
      <h1>{profile.name}</h1>
      {/* Get all of the profiles games */}
      <GameList user={user} games={profile.games} />
    </>
  );
}

export default Profile;