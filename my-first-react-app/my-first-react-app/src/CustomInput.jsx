import React, {useState} from "react";

function CustomInput() {
    const [inputValue, setInputValue] = useState("");

    return(
        <input type="text" 
            value={inputValue} 
            onChange={(event) => setInputValue(event.target.value)} 
        />
    )
}
export default CustomInput;