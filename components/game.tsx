import { useRef } from "react";
import { useGame } from "../helpers/useGame";
import { Types } from "phaser";
import { MainScene } from "./mainScene";

const gameConfig: Types.Core.GameConfig = {
  width: "100%",
  height: "100%",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false, // Set to true to enable physics debugging
    },
  },
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  fps: {
    target: 63,
    },
  render: {
    antialias: false,
    pixelArt: false,
    roundPixels: false,
  },
  scene: MainScene,
};

// you can place this in a different file if you prefer
const PhaserGame = () => {
  const parentEl = useRef<HTMLDivElement>(null);
  useGame(gameConfig, parentEl);

  return (
    <div className="container">
      <div ref={parentEl} />
    </div>
  );
};

export default PhaserGame;
