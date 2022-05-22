
import "./main.css";
import React from "react";
import Player from "./players"

class Main extends React.Component {
    
    state = {player1name:"player1", player2name:"player2",
    player1: true, player2: false,
    totalScore1: 0, currentScore1:0,totalScore2: 0, currentScore2:0,
    imgNum1: 0, imgNum2:0,newCurrentScore1: 0, newCurrentScore2:0,
    winnerShow: true, maxScore: 100, holdButtonCon: false, sixsix: "", showMessage: false} 
 
    //-----------------------------------------------   
    resetGame = ()=>{
        this.setState({
            currentScore1: 0, currentScore2: 0,
            totalScore2: 0,totalScore1: 0,
            winnerShow: true, player1name:"player1",
            player2name:"player2",  maxScore: 100, newCurrentScore1: 0, newCurrentScore2:0})
    }
    //----------------------------------------------
    backtoPlayAfterSix =() =>{
        this.setState({showMessage: false})
    }
    randomizeNumbers = ()=>{
    const rand1 = Math.ceil(Math.random()*6)
    const rand2 = Math.ceil(Math.random()*6)
    this.setState({imgNum1: `${rand1}`, imgNum2: `${rand2}`})
    this.setState({holdButtonCon: true})
    this.setState({showMessage: false})
    if(rand1 === 6 && rand2 === 6){
        this.setState({showMessage: true})
    }
//----------------------------------------------------
    if(this.state.player1 === true){
        this.setState(() => ({newCurrentScore1: rand1+rand2 }))
    this.setState({currentScore1: this.state.currentScore1 + rand1+ rand2}, ()=>{
        this.setState((prevState)=>({totalScore1:prevState.totalScore1 + rand1+ rand2}))
       if(this.state.currentScore1 > this.state.maxScore){
           this.setState({player2name: "player 2 is the Winner",player1name:`player 1 total score is ${this.state.currentScore1}`,  winnerShow: false})
       }else if(this.state.currentScore1 === this.state.maxScore){
        this.setState({player1name: "player 1 is the Winner reached exactly 100",player2name:"", currentScore1: 0, currentScore2: 0, totalScore2: 0,totalScore1: 0, winnerShow: false})
       }
    }) 
    }  
    else if(this.state.player2 === true){
    this.setState(() => ({newCurrentScore2: rand1+rand2 }))
    this.setState({currentScore2: this.state.currentScore2 + rand1+ rand2}, ()=>{
        this.setState((prevState)=>({totalScore2:prevState.totalScore2 + rand1+ rand2}))
        if(this.state.currentScore2 > this.state.maxScore){
            this.setState({player1name: "player 1 is the Winner",player2name:`player 2 total score is ${this.state.currentScore2}`,  winnerShow: false})
        } else if(this.state.currentScore2 === this.state.maxScore){
            this.setState({player2name: "player 2 is the Winner reached exactly 100",player1name: "", currentScore1: 0, currentScore2: 0, totalScore2: 0,totalScore1: 0,  winnerShow: false})
        }
    })
   }
}
//----------------------------------------------------
   onClickHold =() =>{
    this.setState({player1: !this.state.player1 , player2: !this.state.player2})
    this.setState({newCurrentScore2: 0})
    this.setState({newCurrentScore1: 0})
    this.setState({holdButtonCon: false})
   }
   //--------------------------------------------------
  onInputChange = (event)=>{
      this.setState({maxScore: event.target.value})
  }
  //--------------------------------------------



    render(){
  return (
    <div className="main">
        {/* <div>
        <label>Player 1 name:</label><input type="text" onChange={this.onInputChangeName}></input>
        <label>Player 2 name:</label><input type="text" onChange={this.onInputChangeName2}></input>
      </div> */}
       <div className="header">
            <div className="logo" >
            <img src="https://everynationnj.org/wp-content/uploads/2019/11/ennj-artwork-1080x675.png" alt="logo" style={{width:80}}></img>
            </div>
            <div className="title"><img src={require('./images/titlePic.png')} alt="title" style={{width:300}}/></div>
            <div><button className="reset" onClick={this.resetGame}>Reset Game</button></div>
        </div>
        {this.state.winnerShow && <div className="mainGame">
        <Player name={this.state.player1name} totalScore={this.state.totalScore1} currentScore={this.state.player1 && this.state.newCurrentScore1}/>
        <div className="tools">
        <img src={require(`./images/pic-${this.state.imgNum1}.png`)} alt="dice" className="image"style={{width:50, position: 'fixed', top:"230px"}}/>
        <img src={require(`./images/pic-${this.state.imgNum2}.png`)} alt="dice" className="image" style={{width:50, position: 'fixed', top:"280px"}}/>
        <button className="roll-dice-button" onClick={this.randomizeNumbers}>Roll The Dice</button>
         { this.state.holdButtonCon && <button className="hold-button" onClick={this.onClickHold}>HOLD</button>}
        <label className="label" style={{color: "white" , position: 'fixed', top:"80px"}}>MAX SCORE</label>
        <input type = 'number' className="input-button" onChange={this.onInputChange} style={{width: 100, position: 'fixed', top:"100px"}}></input>
        { this.state.showMessage && <div className="popup" style={{color: "black", height: 300, borderRadius:"20%", fontSize: "30px",position: 'fixed', top:"50px" }}><img src="https://c.tenor.com/VpQP6Yhbc8gAAAAM/will-ferrell-amy-poehler.gif" alt="gif"></img><h1>Nice! 12 Points Added</h1><button onClick={this.backtoPlayAfterSix}>continue</button></div>}
        </div>
        <Player className="player1" name={this.state.player2name} totalScore={this.state.totalScore2} currentScore={this.state.player2 && this.state.newCurrentScore2}/>
        </div>}
        {this.state.winnerShow || <div className="winnerwinner">
                 <div>
                     <h1>{this.state.player1name}</h1>
                 </div> 
                 <div>
                     <h1>{this.state.player2name}</h1>
                </div>
            </div>}
    </div>
  );
}
}
export default Main;
