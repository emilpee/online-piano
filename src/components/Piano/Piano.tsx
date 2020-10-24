import React, { FunctionComponent, useEffect, useState } from 'react'
import { Howl, Howler } from 'howler'
import pianoData from './data/pianoData.json'
import PianoContainer from './components/PianoContainer'
import PianoKey from './components/PianoKey'
import PianoVolume from './components/PianoVolume'
import './styles.scss'

const Piano: FunctionComponent = () => {
  const [volume, setVolume] = useState<number>(1)

  useEffect(() => {
    Howler.volume(Math.round(volume * 10) / 10)
  }, [volume])

  const playNote = (event: React.MouseEvent<HTMLElement>): void => {
    event.persist()

    let pianoNote = (event.target as Element).id
    console.log(pianoNote)
    let sound = new Howl({
      src: [`/audio/${pianoNote}.mp3`],
    })

    sound.play()
  }

  const handleKeyboardClick = (
    event: React.KeyboardEvent<HTMLElement>,
  ): void => {
    let keyName = event.key
    let pressedKey = pianoData.find(
      (key) => key.keyboardKey === keyName,
    )

    let sound = new Howl({
      src: [`/audio/${pressedKey?.key}.mp3`],
    })

    sound.play()
  }

  const handlePianoVolume = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const buttonType = event.target as HTMLButtonElement

    if (buttonType.id === 'inc' && volume < 1) {
      setVolume(volume + 0.1)
    } else if (buttonType.id === 'dec' && volume > 0.1) {
      setVolume(volume - 0.1)
    }
  }

  return (
    <section className="main">
      <div className="piano">
        <PianoContainer>
          <div className="piano-volumes">
            <PianoVolume
              id="inc"
              handlePianoVolume={handlePianoVolume}
            >
              +
            </PianoVolume>
            <PianoVolume
              id="dec"
              handlePianoVolume={handlePianoVolume}
            >
              -
            </PianoVolume>
          </div>
          <div className="piano-keys">
            {pianoData.map((pianoKey) => (
              <PianoKey
                onKeyClick={playNote}
                onKeyBoardClick={handleKeyboardClick}
                key={pianoKey.key}
                id={pianoKey.key}
                className={`piano-keys-key ${pianoKey.type}`}
                tabIndex={0}
              />
            ))}
          </div>
        </PianoContainer>
      </div>
    </section>
  )
}

export default Piano
