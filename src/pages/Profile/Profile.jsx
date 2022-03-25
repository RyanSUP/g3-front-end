import GameList from "../../components/GameList/GameList";

const Profile = ({profile}) => {

  return (
    <>
      {profile.name}
      {/* Get all of the profiles games */}
      <GameList games={profile.games} />
    </>
  );
}
 
export default Profile;