import React from "react";
import { useState } from "react";


const Semaforo = () => {
    const [ color, setColor] = useState("");
    return (
        <div className="container-fluid div-padre">
            <div onClick={()=> setColor("red")} className={`red ${color == "red" ? "shine" : ""}`}></div>
            <div onClick={()=> setColor("yellow")} className={`yellow ${color == "yellow" ? "shine" : ""}`}></div>
            <div onClick={()=> setColor("green")} className={`green ${color == "green" ? "shine" : ""}`}></div>
        </div>


    )
}

export default Semaforo;