import React, { FunctionComponent, useEffect, useState } from "react";
import { Howl, Howler } from "howler";
import pianoData from "./data/pianoData.json";
import PianoKeysContainer from "./components/PianoKeysContainer";
import PianoKey from "./components/PianoKey";
import PianoVolume from "./components/PianoVolume";
import "./styles.scss";

const Piano: FunctionComponent = () => {
  const [volume, setVolume] = useState<number>(1);

  useEffect(() => {
    Howler.volume(Math.round(volume * 10) / 10);
  }, [volume]);

  const playNote = (event: React.MouseEvent<HTMLElement>): void => {
    event.persist();

    let pianoNote = (event.target as Element).id;
    let sound = new Howl({
      src: [`/audio/${pianoNote}.mp3`],
    });

    sound.play();
  };

  const handlePianoVolume = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonType = event.target as HTMLButtonElement;

    if (buttonType.id === "inc" && volume < 1) {
      setVolume(volume + 0.1);
    } else if (buttonType.id === "dec" && volume > 0.1) {
      setVolume(volume - 0.1);
    }
  };

  return (
    <div className="piano">
      <PianoKeysContainer>
        <div className="piano-volumes">
        <PianoVolume id="inc" handlePianoVolume={handlePianoVolume}>
          +
        </PianoVolume>
        <PianoVolume id="dec" handlePianoVolume={handlePianoVolume}>
          -
        </PianoVolume>
        </div>
        {pianoData.map((pianoKey) => (
          <PianoKey
            onKeyClick={playNote}
            key={pianoKey.key}
            id={pianoKey.key}
            className={`piano-key ${pianoKey.type}`}
          />
        ))}
      </PianoKeysContainer>
    </div>
  );
};

export default Piano;
