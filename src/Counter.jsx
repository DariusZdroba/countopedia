import React, { Component } from "react";
import attack from "./images/attack.png";
import defend from "./images/defend.png";
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefence = this.handleDefence.bind(this);
    this.handleRandomPlay = this.handleRandomPlay.bind(this);
    this.state = {
      count: 0,
      gameStatus: "",
      lastPlay: "",
    };
  }
  handleAttack() {
    //alert("Attack Clicked !");
    //this.setState({ count: this.state.count + 1 });
    this.setState((prev) => {
      let newCount = prev.count + Math.round(Math.random() * 10);

      return {
        count: newCount,
        lastPlay: "Attack",
        gameStatus: newCount > 10 && " You Won !!",
      };
    });
  }
  handleDefence() {
    this.setState((prev) => {
      let newCount = prev.count - Math.round(Math.random() * 10);
      return {
        count: newCount,
        lastPlay: "Defend",
        gameStatus: newCount < -10 && " You Lost !!",
      };
    });
  }
  handleRandomPlay() {
    let playMode = Math.round(Math.random());
    if (playMode == 0) {
      this.handleAttack();
    } else {
      this.handleDefence();
    }
  }
  handleReset = () => {
    this.setState((prev) => {
      return {
        count: 0,
        lastPlay: "",
        gameStatus: "",
      };
    });
  };
  render() {
    return (
      <div className="row text-white text-center">
        <h1>Game Score: {this.state.count}</h1>
        <p>You win at +10 points, you lose at -10 points</p>
        <p>Last Play: {this.state.lastPlay} </p>
        <h3>Game Status: {this.state.gameStatus} </h3>
        <div className="d-flex justify-content-md-between">
          <div className="col-6 col-md-3">
            <img
              src={attack}
              onClick={this.handleAttack}
              alt=""
              style={{
                width: "100%",
                cursor: "pointer",
                border: "1px solid green",
              }}
              className="p-4 rounded"
            />
          </div>
          <div className="col-6 col-md-3">
            <img
              src={defend}
              onClick={this.handleDefence}
              alt=""
              style={{
                width: "100%",
                cursor: "pointer",
                border: "1px solid red",
              }}
              className="p-4 rounded"
            />
          </div>
        </div>

        <div className="col-12 col-md-4 offset-md-4">
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.handleRandomPlay}
          >
            {" "}
            Random Play
          </button>
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={this.handleReset}
          >
            {" "}
            Reset
          </button>
        </div>
      </div>
    );
  }
}
