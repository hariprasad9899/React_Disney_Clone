import React from "react";
import {nanoid} from 'nanoid'
import Options from "./Options";

export default function GeneratorComponent({category, categoryState}) {

    let categoryOptions = Options[category].map(item => {
        return <a key = {nanoid()}>{item}</a>
    })

    let POPUP_STYLE = {
        top: (categoryState) ? "30px": "40px",
        transition: (categoryState) ? "2s ease" : "none"
    }

    return (
        <div className= {(categoryState) ? `fadeIn ${category}-opt popOptions`: `fadeOut ${category}-opt popOptions` } >
            {categoryOptions}
        </div>
    )

}