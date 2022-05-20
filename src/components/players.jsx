// import "./App.css";
import "./main.css";
import React from "react";
import image from "./images/background.jpg";

// export default class MainTest extends React.Component {
//   render() {
//     return (
//       <div  className="playersClass" style={{ backgroundImage:`url(${image})`,  color: "white" }}>
//         <Player name="player1" totalScore="0" currentScore="0"/>
//         <Player name="player2" totalScore="0" currentScore="0"/>
//       </div>
//     )
//   }
// }


   function Player(props) {
    return (
    <div className="player1" style={{ backgroundImage:`url(${image})`,  color: "white" }}>
          <div>
            <h2>{props.name}</h2>
          </div>
          <div className="totalScore">
                <div>Total</div>
                <div>{props.totalScore}</div>
          </div>
          <div className="currentScore">
                <div>Current</div>
                <div>{props.currentScore}</div>
          </div>
    </div>
      
  )}

  export default Player;

