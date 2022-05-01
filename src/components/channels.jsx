import React, { Component } from "react";
import Channel from "./channel";
import drums from "../sounds/drums.mp3";
import tambourine_shake_higher from "../sounds/tambourine_shake_higher.mp3";
import all_tracks from "../sounds/ALL_TRACK.mp3";
import B_VOC from "../sounds/B_VOC.mp3";
import HE_HE_VOC from "../sounds/HE_HE_VOC.mp3";
import HIGH_VOC from "../sounds/HIGH_VOC.mp3";
import JIBRISH from "../sounds/JIBRISH.mp3";
import LEAD1 from "../sounds/LEAD1.mp3";
import UUHO_VOC from "../sounds/ALL_TRACK.mp3";

class Channels extends Component {
  //set all audio
  sounds = [
    { id: 1, sound: drums, color: "#3e3fe2" },
    { id: 2, sound: tambourine_shake_higher, color: "#3d8be0" },
    { id: 3, sound: all_tracks, color: "#3de0d4" },
    { id: 4, sound: B_VOC, color: "#3de0a0" },
    { id: 5, sound: HE_HE_VOC, color: "#3de065" },
    { id: 6, sound: HIGH_VOC, color: "#5be03d" },
    { id: 7, sound: JIBRISH, color: "#8ae03d" },
    { id: 8, sound: LEAD1, color: "#cfe03d" },
    { id: 9, sound: UUHO_VOC, color: "#e0a83d" },
  ];
  render() {
    console.log("render channels");
    return (
      <div>
        {this.sounds.map((curSound) => (
          <Channel
            sound={curSound.sound}
            key={curSound.id}
            st={this.props.st}
            color={curSound.color}
            onupseconds={this.props.onupseconds}
          />
        ))}
      </div>
    );
  }
}

export default Channels;
