import React, { FunctionComponent } from 'react'
import { Howl, Howler } from 'howler'
import './styles.scss'

const Piano: FunctionComponent = () => {

    const playNote = () => {
        let sound = new Howl({
            src: ['/audio/c3.mp3'],
          })
        sound.play()
    }

    return (
        <div className="piano">
            <ul>
                <li onClick={playNote} className="white c"></li>
                <li className="black c#"></li>
                <li className="white d"></li>
                <li className="black d#"></li>
                <li className="white e"></li>
                <li className="white f"></li>
                <li className="black f#"></li>
                <li className="white g"></li>
                <li className="black g#"></li>
                <li className="white a"></li>
                <li className="black a#"></li>
                <li className="white b"></li>
                <li className="white c"></li>
                <li className="black c#"></li>
                <li className="white d"></li>
                <li className="black d#"></li>
                <li className="white e"></li>
                <li className="white f"></li>
                <li className="black f#"></li>
                <li className="white g"></li>
                <li className="black g#"></li>
                <li className="white a"></li>
                <li className="black a#"></li>
                <li className="white b"></li>
                <li className="white c"></li>
                <li className="black c#"></li>
                <li className="white d"></li>
                <li className="black d#"></li>
                <li className="white e"></li>
                <li className="white f"></li>
                <li className="black f#"></li>
                <li className="white g"></li>
            </ul>
        </div>
    )
}

export default Piano
