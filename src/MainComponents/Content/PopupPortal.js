import React from "react";
import ReactDOM from "react-dom/client";
import PortalReactDom from 'react-dom';

export default function PopupPortal({added, visibleState}) {

    return PortalReactDom.createPortal(
        <div className= { `watchedPopup ${(!visibleState) ? "showPopup": "hidePopup"}`}>
            <p>{(!added) ? 'Added To Watchlist' : 'Removed From Watchlist'}</p>
        </div>,
        document.getElementById('root')
    )
}