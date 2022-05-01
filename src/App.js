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
          //title:
          style={{
            fontFamily: " Comic Sans MS, sans-serif",
          }}
        >
          Loop Machine
        </h1>

        <div>
          <div
            style={{
              marginLeft: `${(this.state.seconds * 500) / 17}px`, //the cursor
              position: "absolute",
              width: "1px",
              height: "333px",
              backgroundColor: "white",
              zIndex: "10",
            }}
          ></div>

          <Channels st={this.state} onupseconds={this.upSeconds} />
          <button //start button
            onClick={() => this.playAll()}
            className="btn btn-secondary btn-sm"
          >
            start
          </button>
          <button //stop button
            onClick={() => this.stopAll()}
            className="btn btn-danger btn-sm "
          >
            stop
          </button>
          <ToggleButton //loop button
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
    //func to set the audio seconds for the cursor
    console.log("getSeonds: " + this.state.seconds);
    return `${this.state.seconds}`;
  }
  playAll() {
    //func to play all audio sim
    console.log("playall");

    this.setState({ play: true });
  }
  stopAll() {
    //func to stop all audio sim and restart
    console.log("");
    this.setState({ play: false, seconds: 0 });
  }
  loopAll() {
    //func to loop all audio sim
    console.log("loop" + !this.state.loop);
    this.setState({ loop: !this.state.loop });
  }

  upSeconds = (curseconds) => {
    //func to get the audio seconds from the channel component
    console.log("upseconds: " + this.state.seconds);
    this.setState({ seconds: curseconds });
  };
}

export default App;
