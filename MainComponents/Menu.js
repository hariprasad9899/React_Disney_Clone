import React, { useEffect, useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import GeneratorComponent from "./MenuComponents/GeneratorComponent";

export default function Menu() {

    const [searchInput, setSearchInput] = useState( {
        active: false,
        value: ""
    })

    function handleSearchInput(e) {
        setSearchInput(prevSearchInput => {
            return { ...prevSearchInput, value: e.target.value,}
        })
    }

    function handleActive() {
        setSearchInput(prevSearchInput => {
            return { ...prevSearchInput, active: true }
        })
    }

    function handleInActive() {
        setSearchInput(prevSearchInput => {
            return { ...prevSearchInput,active: false }
        })
    }

    let INPUT_STYLE = {
        width: (searchInput.active) ? "25rem":"16rem",
        borderBottom: (searchInput.active) ? "1px solid rgb(106, 149, 243)":"1px solid rgba(245, 245, 245, 0.76)",
        backgroundImage: `url(${'./imgs/searchIcon.svg'})`
    }

    const [width,setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(prevWidth => {
            return window.innerWidth
        })
    }
    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => {
            return window.removeEventListener("resize", updateWidth)
        }
    }, [])


    const [optionsState, setOptionsState] = useState( {
        "TV": false,
        "Movies": false, 
        "Sports": false,
    });

    function  handleMouseOver(option)  {
        setOptionsState(prevOptionState => {
            return {
                ...prevOptionState,
                [option]: true
            }
        })
    }

    function  handleMouseOut(option, e)  {

        if(e.target !== "TV-opt") {
            setOptionsState(prevOptionState => {
                return {
                    ...prevOptionState,
                    [option]: false
                }
            })
        } 

        
    }



    return (
        <div className="topMenu">

            <div className="options-section">
                <div className="burger-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img src= './imgs/disneyLogo.svg'></img>
                <nav className="nav-options">
                    <a onMouseOver={() => handleMouseOver("TV")}  onMouseLeave = {(e) => handleMouseOut("TV",e)}>TV</a>
                    <a onMouseOver={() => handleMouseOver("Movies")} onMouseLeave = {(e) => handleMouseOut("Movies",e)}>Movies</a>
                    <a onMouseOver={() => handleMouseOver("Sports")} onMouseLeave = {(e) => handleMouseOut("Sports",e)}>Sports</a>
                    <a>Disney+</a>
                    { optionsState.TV && <GeneratorComponent  category = "TV" />}
                    { optionsState.Movies && <GeneratorComponent  category = "Movies" /> }
                    { optionsState.Sports && <GeneratorComponent  category = "Sports" />}
                </nav>
            </div>

            <div className="search-section">
                
                {width < 760 && <button className="minBtn">SUBSCRIBE</button>}

                <input type="text" 
                    placeholder="Search"
                    value = {searchInput.value}
                    onChange = {(e) => handleSearchInput(e)}
                    onInput = {handleActive}
                    onBlur = {handleInActive}
                    onFocus = {handleActive}
                    style = {INPUT_STYLE}
                ></input>

                {width > 760 && <button>SUBSCRIBE</button>}

                <a className="login-btn">LOGIN</a>
            </div>
        </div>
    )

}