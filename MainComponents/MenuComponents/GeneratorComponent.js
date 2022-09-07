import React from "react";
import {nanoid} from 'nanoid'
import Options from "./Options";

export default function GeneratorComponent({category}) {

    let categoryOptions = Options[category].map(item => {
        return <a key = {nanoid()}>{item}</a>
    })

    return (
        <div className= {`${category}-opt popOptions`}>
            {categoryOptions}
        </div>
    )

}