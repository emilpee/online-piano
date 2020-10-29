import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Howl, Howler } from 'howler'
import pianoData from './data/pianoData.json'
import PianoContainer from './components/PianoContainer'
import PianoKey from './components/PianoKey'
import PianoVolume from './components/PianoVolume'
import PianoMenu from './components/PianoMenu'
import './styles.scss'

const Piano: FunctionComponent = () => {
  const [volume, setVolume] = useState<number>(1)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const pianoKeyRef = useRef(null)

  useEffect(() => {
    Howler.volume(Math.round(volume * 10) / 10)
  }, [volume])

  const handleKeyClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    event.persist()

    let pianoNote = (event.target as Element).id
    let sound = new Howl({
      src: [`/audio/${pianoNote}.mp3`],
    })

    sound.play()
  }

  const handleKeyboardClick = (
    event: React.KeyboardEvent<HTMLButtonElement>,
  ): void => {
    let keyName = event.key
    let pressedKey = pianoData.find(
      (key) => key.keyboardKey === keyName,
    )

    if (pianoKeyRef.current !== null) {
      pianoKeyRef?.current.focus()
      // pianoKeyRef.current.style.backgroundColor = 'black'
    }

    let sound = new Howl({
      src: [`/audio/${pressedKey?.key}.mp3`],
    })

    if (pressedKey) {
      sound.play()
    } else {
      return
    }
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

  const handleSwitchCheck = () => setIsChecked(!isChecked)

  return (
    <section className="main">
      <PianoMenu onChange={handleSwitchCheck} isChecked={isChecked} />
      <div className="piano">
        <PianoContainer>
          <div className="piano-volumes">
            <PianoVolume
              id="inc"
              color="primary"
              handlePianoVolume={handlePianoVolume}
            >
              +
            </PianoVolume>
            <PianoVolume
              id="dec"
              color="secondary"
              handlePianoVolume={handlePianoVolume}
            >
              -
            </PianoVolume>
          </div>
          <div className="piano-keys">
            {pianoData.map((pianoKey) => (
              <PianoKey
                onKeyClick={handleKeyClick}
                onKeyboardPress={handleKeyboardClick}
                keyboardKey={pianoKey.keyboardKey}
                key={pianoKey.key}
                id={pianoKey.key}
                className={`piano-keys-key ${pianoKey.type}`}
                tabIndex={0}
                isChecked={isChecked}
              />
            ))}
          </div>
        </PianoContainer>
      </div>
    </section>
  )
}

export default Piano
