import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Howl, Howler } from 'howler'
import pianoData from '../../data/pianoData.json'
import {
  PianoContainer,
  PianoKey,
  PianoVolume,
  PianoVolumeDisplay,
  PianoMenu,
} from './components/'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll',
    WebkitOverflowScrolling: 'touch',
  },
  wrapper: {
    display: 'flex',
    minHeight: 500,
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
    },
  },
  pianoContainer: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#222',
    display: 'flex',
    margin: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(5),
    minWidth: 1200,
    [theme.breakpoints.down('md')]: {
      margin: 0,
    },
  },
  pianoKeys: {
    display: 'flex',
    marginRight: theme.spacing(4),
  },
  singlePianoKey: {
    borderLeft: '1px solid #333',
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    listStyle: 'none',
  },
  pianoVolumes: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginRight: theme.spacing(5),
    minWidth: 120,
  },
  black: {
    background: '#333',
    height: 128,
    marginLeft: -16,
    border: 'none',
    minWidth: 28,
    zIndex: 1,
    '&:active': {
      background: 'linear-gradient(to top, #555 0%, #333 100%)',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  white: {
    background: '#fff',
    height: 256,
    minWidth: 56,
    marginLeft: -16,
    '&:active': {
      background: 'linear-gradient(to bottom, #fff 0%, #e6e6e6 100%)',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  margin: {
    marginRight: 8,
  },
  keypressWhite: {
    background: 'linear-gradient(to bottom, #fff 0%, #e6e6e6 100%)',
  },
  keypressBlack: {
    background: 'linear-gradient(to top, #555 0%, #333 100%)',
  },
}))

const Piano: FunctionComponent = () => {
  const [volume, setVolume] = useState<number>(1)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [currentFocus, setCurrentFocus] = useState<number>(-1)
  const classes = useStyles()
  const pianoKeyRef = useRef([])

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

  const handlePianoVolume = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const buttonType = event.currentTarget as HTMLButtonElement

    if (buttonType.id === 'inc' && volume < 1) {
      setVolume((volume) => volume + 0.1)
    } else if (buttonType.id === 'dec' && volume > 0.1) {
      setVolume((volume) => volume - 0.1)
    }
  }

  const handleKeyDown = useCallback(
    (e) => {
      if (e.repeat) {
        return
      }

      pianoKeyRef.current = pianoKeyRef.current.slice(
        0,
        pianoData.length,
      )

      let keyName = e.key
      let pressedKey = pianoData.find(
        (key) => key.keyboardKey === keyName,
      )

      let sound = new Howl({
        src: [`/audio/${pressedKey?.key}.mp3`],
        preload: true,
      })

      if (pressedKey && !sound.playing()) {
        sound.play()
        setCurrentFocus(pianoData.indexOf(pressedKey))

        if (pianoKeyRef) {
          let index = pianoData.indexOf(pressedKey)
          pianoKeyRef.current[index].focus()

          pianoKeyRef.current[index].classList.contains(classes.white)
            ? pianoKeyRef.current[index].classList.add(
                classes.keypressWhite,
              )
            : pianoKeyRef.current[index].classList.add(
                classes.keypressBlack,
              )

          setTimeout(
            () =>
              pianoKeyRef.current[index].classList.contains(
                classes.white,
              )
                ? pianoKeyRef.current[index].classList.remove(
                    classes.keypressWhite,
                  )
                : pianoKeyRef.current[index].classList.remove(
                    classes.keypressBlack,
                  ),
            200,
          )
        }
      }
    },
    [
      setCurrentFocus,
      pianoKeyRef,
      classes.keypressWhite,
      classes.white,
      classes.keypressBlack,
    ],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const handleSwitchCheck = () => setIsChecked(!isChecked)

  return (
    <>
      <PianoMenu onChange={handleSwitchCheck} isChecked={isChecked} />
      <section className={classes.main}>
        <div className={classes.wrapper}>
          <PianoContainer className={classes.pianoContainer}>
            <div className={classes.pianoVolumes}>
              <PianoVolumeDisplay volume={volume} />
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
            <div className={classes.pianoKeys}>
              {pianoData.map((pianoKey, index) => (
                <PianoKey
                  id={pianoKey.key}
                  key={pianoKey.key}
                  index={index}
                  onKeyClick={handleKeyClick}
                  keyboardKey={pianoKey.keyboardKey}
                  focus={currentFocus === index}
                  setFocus={setCurrentFocus}
                  value={(el: HTMLButtonElement) =>
                    (pianoKeyRef.current[index] = el)
                  }
                  className={`${classes.singlePianoKey} 
                ${
                  pianoKey.key.includes('b') ||
                  pianoKey.key.includes('e')
                    ? classes.margin
                    : ''
                }
                ${
                  pianoKey.type === 'black'
                    ? classes.black
                    : classes.white
                }`}
                  isChecked={isChecked}
                />
              ))}
            </div>
          </PianoContainer>
        </div>
      </section>
    </>
  )
}

export default Piano
