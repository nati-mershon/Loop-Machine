import React, { Component } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";

class Channel extends Component {
  state = {
    mute: false,
  };

  constructor(props) {
    super(props);
    this.audio = new Audio(props.sound);
    this.audio.muted = false;
  }

  sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

  async waitForReady() {
    while (this.audio.readyState !== 4) {
      await this.sleep(1000);
    }
  }

  toggleMute = () => {
    console.log("mute" + this.props.id);
    this.setState({ mute: !this.state.mute }, () => {
      this.state.mute ? (this.audio.muted = true) : (this.audio.muted = false);
    });
  };
  componentDidMount() {
    // this.props.onready();
    this.audio.addEventListener("ended", () => {
      console.log("ended");
      this.props.st.play = false;
    });
    this.audio.addEventListener("timeupdate", () => {
      console.log("abcd" + this.props.st.seconds);
      console.log(">1");
      this.props.onupseconds(parseInt(this.audio.currentTime));
    });

    this.init();
  }

  componentDidUpdate() {
    this.init();
  }

  init() {
    // this.audio.currentTime = this.props.st.milseconds;
    //this.audio.fastSeek(20);
    this.audio.loop = this.props.st.loop;
    console.log("didUpdate" + this.props.st.play);
    if (this.props.st.play) this.audio.play();
    else {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  render() {
    console.log("render channel");
    // this.state.play ? this.audio.play() : this.audio.pause();

    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 0,
          }}
        >
          <div
            style={{
              width: 500,
              height: 30,
              backgroundColor: this.props.color,
            }}
          ></div>
          <ToggleButton
            style={{
              width: 50,
              height: 30,
            }}
            className="btn btn-sm mb-2"
            id="toggle-check"
            type="checkbox"
            variant="outline-primary"
            checked={this.state.mute}
            value="1"
            onClick={this.toggleMute}
          >
            mute
          </ToggleButton>
        </div>
      </div>
    );
  }
}

export default Channel;
