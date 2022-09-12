import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faMasksTheater } from '@fortawesome/free-solid-svg-icons';

export default function Channel({hoverState,onmouseOutBurger}) {

    return (
        <div className= {(hoverState) ? "channel channelFadeIn": "channel channelFadeOut"}>
            <li>
                <a><FontAwesomeIcon icon={faTv} /></a>
                <a>Channels</a>
            </li>
            <li>
                <a><FontAwesomeIcon icon={faLanguage} /></a>
                <a>Languages</a>
            </li>
            <li>
                <a><FontAwesomeIcon icon={faMasksTheater} /></a>
                <a>Genres</a>
            </li>
        </div>
    )

}