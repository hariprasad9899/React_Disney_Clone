import React, { useContext, useEffect, useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import GeneratorComponent from './GeneratorComponent';
import Channel from '../MenuComponents/Channel';
import '../../Sass/menu.scss';
import Loginpop from "./Loginpop/Loginpop";
import { BlurContext } from "../Context/BlurContext";
import {useNavigate, useLocation} from 'react-router-dom';
import SearchResult from "./SearchResult";
import logoImg from '../../Imgs/disneyLogo.svg';
import DisneyLogo from '../SVGIcons/DisneyLogo';

export default function Menu() {

    // Search Section
    //______________________________________________________________________________________________________________________________________

    // State to maintain the search input box in the menu
    const [searchInput, setSearchInput] = useState( {
        active: false,
        value: ""
    })

    // Setting the input value of the input search box using state
    function handleSearchInput(e) {
        setSearchInput(prevSearchInput => {
            return { ...prevSearchInput, value: e.target.value,}
        })
    }

    // function that will change the active state, whenever user types something in the search bar
    function handleActive() {
        setSearchInput(prevSearchInput => {
            return { ...prevSearchInput, active: true }
        })
    }

    // function that will change the active state, whenever user stops and moves out from the input box
    function handleInActive(e) {

        if(e.target.className !== 'search-result' && e.target.className !== 'movie-result') {
            setSearchInput(prevSearchInput => {
                return { ...prevSearchInput,active: false, value: "" }
            })
        }
        
    }


    // Styling object that will be added to the input box, which make use of active state. So that, whenever user
    // bottom border will be added and removed 
    let INPUT_STYLE = {
        width: (searchInput.active) ? "25rem":"16rem",
        borderBottom: (searchInput.active) ? "1px solid rgb(106, 149, 243)":"1px solid rgba(245, 245, 245, 0.76)",
        backgroundImage: `url(${'./imgs/searchIcon.svg'})`
    }

    let SEARCH_RESULT_STYLE = {

        display: (searchInput.value.length > 0) ? "flex": "none"
    }

    //______________________________________________________________________________________________________________________________________

    // Responsive Section to hide the Nav options when minimized
    //______________________________________________________________________________________________________________________________________

    // width state to attain responsive using react. 

    const [width,setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(prevWidth => {
            return window.innerWidth
        })
    }

    // Using useEffect() hook, so that whenever the window is resized, the width state value is changed.
    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => {
            return window.removeEventListener("resize", updateWidth)
        }
    }, [])

    //______________________________________________________________________________________________________________________________________


    // States to maintain the Nav Option show/hide. State to change the visisblity of options once cursor is hovered over the menus
    //______________________________________________________________________________________________________________________________________

    // For NavMenu
    const [optionsState, setOptionsState] = useState( {
        "TV": false,
        "Movies": false, 
        "Sports": false,
    });

    // For Burger Menu
    const [burgerHoverState, setBurgerHoverState] = useState(false);

    // NavMenu Mouse over (also hiding Burger Menu when mouse over to Nav)
    function mouseOvered(e) {

        if((e.target.className === "TV") || 
        (e.target.className === "Movies") || 
        (e.target.className === "Sports")) {
            setOptionsState(prevOptionState => {
                return {
                    "TV": false,
                    "Movies": false, 
                    "Sports": false,
                    [e.target.className]: true
                }
            })
        }
        setBurgerHoverState(false)
    }

    // Burger Menu Mouse over (also hiding Nav Menu when mouse over to burger)
    function mouseOverBurger(e) {
        setBurgerHoverState(true)
        setOptionsState(false)
    }

    // Closepops for both Nav and Burgermenu
    function closePops(e) {
        setOptionsState(prevOptionState => {
            return {
                "TV": false,
                "Movies": false, 
                "Sports": false,
            }
        })
        setBurgerHoverState(false);
    }

    // Using useEffect hook to close Navmenu and burger menu when user clicked outside
    useEffect(() => {

        function handleOutClick(e){
            if((e.target.className !== "TV") || 
            (e.target.className !== "Movies") || 
            (e.target.className !== "Sports")) {
                setOptionsState(prevOptionState => {
                    return {
                        "TV": false,
                        "Movies": false, 
                        "Sports": false,
                    }
                })
            }
            if(e.target.className !== "burger-btn") {
                setBurgerHoverState(false);
            }
        }
        window.addEventListener('click', handleOutClick)
        return window.removeEventListener('click', handleOutClick)
    }, [optionsState, burgerHoverState ])

    // Login option 

    const [loginPop, setLoginPop] = useState(false);

    const {blur,setBlur} = useContext(BlurContext);

    const openLoginPop = ()=> {
        setLoginPop(true);
        setBlur(true);
    }

    const closeLoginPop = () => {
        setLoginPop(false);
        setBlur(false);
    }

    const navigate = useNavigate()
    const location = useLocation();
    const navigateSubscribe = () => {
        navigate(`/subscribe`);
    }

    return (
        <div className="topMenu" >

            <div className="options-section" onMouseLeave={closePops}>

                <div className="burger-btn" onMouseEnter={(e) => mouseOverBurger(e)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <Channel  hoverState = {burgerHoverState}/>
                </div>

                {/* <img className="disney-logo" onClick={() => navigate('/')} src= '../Imgs/disneyLogo.svg'></img> */}

                {/* <img className="disney-logo" onClick={() => navigate('/')} src={logoImg}></img> */}
                <DisneyLogo />

                <nav className="nav-options">

                    <li  onMouseEnter={ (e) => mouseOvered(e)} className = "TV">
                        <a className="TV">TV</a>
                        <GeneratorComponent  category = "TV"  categoryState = {optionsState.TV} />
                    </li>

                    <li  onMouseEnter={ (e) => mouseOvered(e)} className = "Movies">
                        <a className="Movies" >Movies</a>
                        <GeneratorComponent  category = "Movies" categoryState = {optionsState.Movies} />
                    </li>

                    <li  onMouseEnter={ (e) => mouseOvered(e)} className = "Sports">
                        <a className="Sports" >Sports</a>
                        <GeneratorComponent  category = "Sports" categoryState = {optionsState.Sports} />
                    </li>

                    <li onMouseOver={closePops}>
                        <a>Disney+</a>
                    </li>

                </nav>

            </div>

            <div className="search-section">
                
                {width < 760 && <button className="minBtn" onClick={navigateSubscribe }>SUBSCRIBE</button>}

                <input type="text" 
                    placeholder="Search"
                    value = {searchInput.value}
                    onChange = {(e) => handleSearchInput(e)}
                    onInput = {handleActive}
                    // onBlur = {handleInActive}
                    onFocus = {handleActive}
                    style = {INPUT_STYLE}
                ></input>

                <div className="search-result" style={SEARCH_RESULT_STYLE}>

                    <SearchResult searchVal = {searchInput.value} setSearchInput = {setSearchInput} />

                </div>

                {width > 760 && <button onClick={() => navigate('/subscribe')}>SUBSCRIBE</button>}

                <a className="login-btn" onClick={openLoginPop}>LOGIN</a>
            </div>

            {loginPop && blur && <Loginpop  closePop = {closeLoginPop} loginPop = {loginPop} />}

        </div>
    )

}