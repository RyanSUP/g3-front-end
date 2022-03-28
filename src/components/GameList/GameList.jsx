import React from "react";
import GameCard from "../GameCard/GameCard"
import ScrollToTop from "react-scroll-to-top";

const GameList = ({games, user}) => {

  return (  
<div className="row row-cols-1 row-cols-md-2 g-4">
        {games?.map((result, idx) => 
        <GameCard key={idx} user={user} game={result}/>)}
        <div className="top-btn">
        <ScrollToTop smooth />
        </div>
  </div>
  );
}

export default GameList;