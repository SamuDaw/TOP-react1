import React, {useState} from "react"

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function Paint(){
    const [backgroundColor,setBackgroundColor] = useState(COLORS[0]);
    const [timesPainted,setTimesPainted] = useState(0);

    const onButtonClick = (color, times) => () => {
        setBackgroundColor(color);
        setTimesPainted(times + 1);
    };
    return(
        <div className="paint" style={{backgroundColor}}>
            <h1>Colors</h1>
            <h4>Times painted: </h4>
            <h5>{timesPainted}</h5>
            {COLORS.map((color) => 
            (
                <button type="button" key={color} onClick={onButtonClick(color, timesPainted)} className={backgroundColor === color ? "selected" : ""}>{color}</button>
            ))}

        </div>
    )
}

export default Paint;