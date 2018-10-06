import React, { Component } from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import fighters from "./fighters.json";
import freshFighters from "./freshFighters.json";
import shuffle from './components/Shuffle/Shuffle'

class App extends Component {

  state = {
    message: "Choose your destiny!",
    score:0,
    topScore:0,
    fighters,
    freshFighters
  };

  //Handles Game Function
  handleGame = id => {

    let message = this.state.message;
    let fighters = this.state.fighters;
    let score = this.state.score;

    if(fighters.find(x => x.id === id)) {
      message = "Superb! You choose correctly!";
      score = score + 1;
      fighters = this.state.fighters.filter(fighter => fighter.id !== id);
    } else {
      message = "Fatality... Try Again...";
      score = 0;
      fighters = freshFighters;
    };

    console.log(fighters);

    // Handles Top Score
    if (score >= this.state.topScore) {
      this.setState({ topScore: score });
    }
    
    // Sets New State
    this.setState({ message });
    this.setState({ fighters });
    this.setState({ score });

  };

  render() {
    return (
      <div>
        <Navbar 
        message={this.state.message}
        score={this.state.score}
        topScore={this.state.topScore} />
        <Header />
        <Wrapper>
          {shuffle(fighters).map(fighter => (
            <Main
              onChange={this.handleGame}
              id={fighter.id}
              key={fighter.id}
              image={fighter.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}
export default App;