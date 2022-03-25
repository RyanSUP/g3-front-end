import GameCard from "../GameCard/GameCard"

const GameList = ({games}) => {

  return (  
<div class="row row-cols-1 row-cols-md-2 g-4">
        {games.map((result, idx) => 
        <GameCard key={idx} game={result}/>)}
  </div>
  );
}

export default GameList;