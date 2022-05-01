import React, { Component } from "react";
import "./App.css";
import Channels from "./components/channels";
import ToggleButton from "react-bootstrap/ToggleButton";

class App extends Component {
  state = {
    play: false,
    loop: false,
    seconds: 0,
  };

  render() {
    console.log("app-render");
    return (
      <main className="main">
        <h1
          style={{
            fontFamily: " Comic Sans MS, sans-serif",
          }}
        >
          Loop Machine
        </h1>

        <div>
          <div
            style={{
              marginLeft: `${(this.state.seconds * 500) / 17}px`,
              position: "absolute",
              width: "1px",
              height: "333px",
              backgroundColor: "white",
              zIndex: "10",
            }}
          ></div>

          <Channels st={this.state} onupseconds={this.upSeconds} />
          <button
            onClick={() => this.playAll()}
            className="btn btn-secondary btn-sm"
          >
            start
          </button>
          <button
            onClick={() => this.stopAll()}
            className="btn btn-danger btn-sm "
          >
            stop
          </button>
          <ToggleButton
            className="mb-2"
            id="toggle-check"
            type="checkbox"
            variant="outline-warning"
            checked={this.state.loop}
            value="1"
            onClick={() => this.loopAll()}
          >
            loop
          </ToggleButton>
        </div>
      </main>
    );
  }
  interval = null;

  getSeconds() {
    console.log("getSeonds: " + this.state.seconds);
    return `${this.state.seconds}`;
  }
  playAll() {
    console.log("playall");

    // if (this.counter === 9) {
    this.setState({ play: true });
    //
  }
  stopAll() {
    console.log("");
    this.setState({ play: false, seconds: 0 });
  }
  loopAll() {
    console.log("loop" + !this.state.loop);
    this.setState({ loop: !this.state.loop });
  }

  upSeconds = (curseconds) => {
    console.log("upseconds: " + this.state.seconds);
    this.setState({ seconds: curseconds });
  };
}

export default App;
