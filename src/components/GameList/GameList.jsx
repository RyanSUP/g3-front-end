import GameCard from "../GameCard/GameCard"

const GameList = ({games, user, updateProfile}) => {

  return (  
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {games?.map((result, idx) => <GameCard updateProfile={updateProfile} key={idx} user={user} game={result}/>)}
    </div>
  );
}

export default GameList;