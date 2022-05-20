// import "./App.css";
import "./main.css";
import React from "react";
// import image from "./images/background.jpg";
import Player from "./players"
class Main extends React.Component {
    
    state = {player1name:"player1", player2name:"player2", player1: true, player2: false, totalScore1: 0, currentScore1:0,totalScore2: 0, currentScore2:0, imgNum1: 0, imgNum2:0, winnerShow: true} 


    resetGame = ()=>{
        this.setState({currentScore1: 0, currentScore2: 0, totalScore2: 0,totalScore1: 0, winnerShow: true, player1name:"player1", player2name:"player2"})
    }
    randomizeNumbers = ()=>{
    const rand1 = Math.ceil(Math.random()*6)
    const rand2 = Math.ceil(Math.random()*6)
    this.setState({imgNum1: `${rand1}`, imgNum2: `${rand2}`})
//-----------------------------------
    if(this.state.player1 === true){
    this.setState({currentScore1: this.state.currentScore1 + rand1+ rand2}, ()=>{
        this.setState((prevState)=>({totalScore1:prevState.totalScore1 + rand1+ rand2}))
       if(this.state.currentScore1 > 100){
           this.setState({player2name: "player 2 is the Winner Winner",player1name:`player 1 total score is ${this.state.currentScore1}`,  winnerShow: false})
       }else if(this.state.currentScore1 === 100){
        this.setState({player1name: "player 1 is the Winner Winner he reached 100",player2name:"", currentScore1: 0, currentScore2: 0, totalScore2: 0,totalScore1: 0, winnerShow: false})
       }
    }) 
    }  
    else if(this.state.player2 === true) 
    
    this.setState({currentScore2: this.state.currentScore2 + rand1+ rand2}, ()=>{
        this.setState((prevState)=>({totalScore2:prevState.totalScore2 + rand1+ rand2}))
        if(this.state.currentScore2 > 100){
            this.setState({player1name: "player 1 is the Winner Winner",player2name:`player 2 total score is ${this.state.currentScore2}`,  winnerShow: false})
        } else if(this.state.currentScore2 === 100){
            this.setState({player2name: "player 2 is the Winner Winner he reached 100",player1name: "", currentScore1: 0, currentScore2: 0, totalScore2: 0,totalScore1: 0,  winnerShow: false})
        }
    })
    
   }
   onClickHold =() =>{
    this.setState({player1: !this.state.player1 , player2: !this.state.player2})
    this.setState({currentScore2: 0})
    this.setState({currentScore1: 0})
   }
  
    render(){
  return (
    <div className="main">
        <div className="header">
        <div className="logo" >
            <img src="https://everynationnj.org/wp-content/uploads/2019/11/ennj-artwork-1080x675.png" alt="logo" style={{width:80}}></img>
        </div>
        <div className="title"><img src={require('./images/titlePic.png')} alt="title" style={{width:300}}/></div>
        <div><button className="reset" onClick={this.resetGame}>Reset Game</button></div>
        </div>
        {this.state.winnerShow && <div className="mainGame">
        <Player name={this.state.player1name} totalScore={this.state.totalScore1} currentScore={this.state.player1 && this.state.currentScore1}/>
        <div className="tools">
        <img src={require(`./images/pic-${this.state.imgNum1}.png`)} alt="dice"style={{width:50}}/>
        <img src={require(`./images/pic-${this.state.imgNum2}.png`)} alt="dice" style={{width:50}}/>
        <button className="roll-dice-button" onClick={this.randomizeNumbers}>Roll The Dice</button>
        <button className="hold-button" onClick={this.onClickHold}>HOLD</button>
        <input type = 'number' className="input-button"></input>
        </div>
        <Player className="player1" name={this.state.player2name} totalScore={this.state.totalScore2} currentScore={this.state.player2 && this.state.currentScore2}/>
        </div>}
        {this.state.winnerShow || <div className="winnerwinner"><h1>{this.state.player1name} {this.state.player2name}</h1></div>}
    </div>
  );
}
}
export default Main;
