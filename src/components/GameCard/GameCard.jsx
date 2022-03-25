import { Link } from "react-router-dom";

const GameCard = ({game}) => {

  return (  
<div className="card" style={{width: '18rem'}}>
  <img src={game.thumb_url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{game.name}</h5>
    <p className="card-text">description goes here</p>
    <button className="btn btn-primary mx-2">Details</button>
    <button className="btn btn-primary mx-2">Add Game</button>
  </div>
</div>
  );
}

export default GameCard;