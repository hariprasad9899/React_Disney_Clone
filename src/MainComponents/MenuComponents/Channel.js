import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faMasksTheater } from '@fortawesome/free-solid-svg-icons';

export default function Channel({hoverState,onmouseOutBurger}) {

    // let hoverClassName = (hoverState) ? "channel channelFadeIn" : "channel channelFadeOut";
    let hoverClassName = `channel ${(hoverState) ? "channelFadeIn" : "channelFadeOut"}`

    return (

        <div className= {hoverClassName}>
            <div className="opt-elem">
                <a><FontAwesomeIcon icon={faTv} /></a>
                <a>Channels</a>
            </div>
            <div className="opt-elem">
                <a><FontAwesomeIcon icon={faLanguage} /></a>
                <a>Languages</a>
            </div>
            <div className="opt-elem">
                <a><FontAwesomeIcon icon={faMasksTheater} /></a>
                <a>Genres</a>
            </div>
        </div>
    )

}