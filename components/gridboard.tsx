import { useRef } from "react";
import { useGame } from "../helpers/useGame";
import { Types } from "phaser";
import { MainScene } from "./../components/mainScene";

const gameConfig: Types.Core.GameConfig = {
  width: "100%",
  height: "100%",
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  render: {
    antialias: false,
    pixelArt: false,
    roundPixels: false,
  },
  scene: MainScene,
};

const GridBoard = () => {
  const parentEl = useRef<HTMLDivElement>(null);
  useGame(gameConfig, parentEl);

  return (
    <>
      <div className="container" ref={parentEl} />
    </>
  );
};

export default GridBoard;
