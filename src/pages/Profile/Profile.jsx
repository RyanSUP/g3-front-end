import GameList from "../../components/GameList/GameList";

const Profile = ({profile, user}) => {
  
  return (
    <>
      {profile.name}
      {/* Get all of the profiles games */}
      <GameList user={user} games={profile.games} />
    </>
  );
}

export default Profile;