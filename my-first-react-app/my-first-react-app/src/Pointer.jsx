import React, {useState} from "react";

function Pointer(){
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    return (
        <div onPointerMove={
            e => {setPosition({
                x: e.clientX-30,
                y: e.clientY-60
            })
        }}
        style={{position: 'relative', width:'50vw', height: '50vh', border: 'solid black 3px'}}>
            
            <div style={{position: 'absolute',borderRadius: '50%', backgroundColor: 'red', transform: `translate(${position.x}px, ${position.y}px)`, left: -10, top: -10, width: 20, height: 20}} />

        </div>
    )
}

export default Pointer;