// api key - AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM 

import React,{useState} from "react";
import Dropdown from "./Dropdown"
import Convert from "./Convert"


const options=[
    {
        label:"Afrikaans",
        value:"af",
    },
    {
        label:"Arabic",
        value:"ar"
    },
    {
        label:"Hindi",
        value:"hi"
    }
]



const Translate=()=>{
    const[language,setLanguage]=useState(options[0]);
    const[text,setText]=useState("");
    return(
        <div>
        <div className="ui form">
        <div className="field">
            <label>EnterText</label>
            <input value={text} onChange={(event)=>{
            setText(event.target.value)
        }}/>
        </div>

        </div>
       
           <Dropdown
                 label="Select a language"
                options={options}
               selected={language}
               onSelectedChange={setLanguage}
           />
           <hr/>
           <h3 className="ui header">Output</h3>
           <Convert language={language} text={text}/>
        </div>
    )
}


export default Translate;