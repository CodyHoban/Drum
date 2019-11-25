import React, {Component} from 'react';
import "../App.css";
import ElectricG from "../Assets/Audio/electricguitar.mp3";


class Drum extends Component {
    constructor(props){
        super(props)
        
    }

    
    onClickHandler = (audio) => {
        audio.play();
    }

    


    render () {
        var audio = new Audio(ElectricG);
        return (
            <div className="container">
                <button className="q" onClick={() => this.onClickHandler(audio)}>q</button>
                <button className="w">w</button>
                <button className="e">e</button>
                <button className="a">a</button>
                <button className="s">s</button>
                <button className="d">d</button>
                <button className="z">z</button>
                <button className="x">x</button>
                <button className="c">c</button>
            </div>

        )
    }
}
export default Drum

