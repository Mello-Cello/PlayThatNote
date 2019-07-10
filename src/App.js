import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Start from './components/Start.js';
import Game from './components/Game.js';
import Summary from './components/Summary.js';
// import Time from 'time'; // CHECK ON THIS!!


class App extends Component {
  constructor(){
    super();
    this.state={
      gameState: 'Start Page',

      notes_played_correctly: 0,
      notes_skipped: 0,
      time_started: null, //this becomes undefined by startTimer, fix later
      time_stopped: null,
      time_played: null,
    }
  }

  startGame = () => {
    this.setState({
      time_started: Date.now,
      gameState: 'Game Page',
      notes_played_correctly: 0,
      notes_skipped: 0,
      time_stopped: null,
      time_played: null,
    })
    console.log('in startGame, time started: ', this.state.time_started);
    console.log('in startGame, gameState: ', this.state.gameState);
  }

  finishGame = () => {
    this.setState({
      time_stopped: Date.now,
      gameState: 'Summary Page'
    })

  }


  render(){
    return (
      <section className="App">

        <h1>Play That Note</h1>

        {this.state.gameState==='Start Page' && <Start
          startGameCallback={this.startGame}
        />}

        {this.state.gameState==='Game Page' && <Game
          finishGameCallback={this.finishGame}
        />}

        {this.state.gameState==='Summary Page' && <Summary
          notes_played_correctly={this.state.notes_played_correctly}
          notes_skipped={this.state.notes_skipped}
          time_played={this.state.time_played}
          restartGameCallback={this.startGame}
        />}

      </section>
    );
  }
}

export default App;
