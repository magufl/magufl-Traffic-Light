import { array } from "prop-types";
import React, {useState} from "react";

export const TrafficLight = () => {
const [color, setColor] = useState ("")




    return (
        <div className="container d-flex flex-column my-5 align-items-center">
            <div className={"text-success col bg-success my-2 rounded-circle " + (color === 'green' ? 'glow-green' : '')}
            onClick={()=> setColor ('green')}>
            0m
            </div>
            <div className={"text-warning col bg-warning my-2 rounded-circle " + (color === 'yellow' ? 'glow-yellow' : '')}
             onClick={()=> setColor ('yellow')}>
            0m
            </div>
            <div className={"text-danger col bg-danger my-2 rounded-circle " + (color === 'red' ? 'glow-red' : '')}
             onClick={()=> setColor ('red')}>
            0m
            </div>

            <button type="button" className="btn btn-info" onClick={()=> setColor('green')}>Change light</button>

        </div>
    )
}