import React, {useState} from "react";


export const TrafficLight = () => {
const [color, setColor] = useState ("")
const [frase, setFrase] = useState({
    title: 'Select a color',
    titleStyles: 'text-dark d-flex justify-content-center my-5'
});

const handleGreen = () => {
    setFrase({
            title: 'Great! You can go!',
            titleStyles: 'text-success d-flex justify-content-center my-5',
        })
}

const handleYellow = () => {
    setFrase({
        title: 'Fast! You are running out of time!',
        titleStyles: 'text-warning d-flex justify-content-center my-5',
    })
}

const handleRed = () => {
    setFrase({
        title: 'UPS! You cannot pass :(',
        titleStyles: 'text-danger d-flex justify-content-center my-5',
    })
}


    return (
        <>
        <h2 className={frase.titleStyles}>{frase.title}</h2>
        <div className="col-1 bg-dark rounded-5 container d-flex flex-column my-5 align-items-center">
            <div className={"text-success col bg-success my-2 rounded-circle " + (color === 'green' ? 'glow-green' : '')}
            onClick= {()=> {setColor ('green');handleGreen()}}>
            0m
            </div>
            <div className={"text-warning col bg-warning my-2 rounded-circle " + (color === 'yellow' ? 'glow-yellow' : '')}
             onClick={()=> {setColor ('yellow');handleYellow()}}>
            0m
            </div>
            <div className={"text-danger col bg-danger my-2 rounded-circle " + (color === 'red' ? 'glow-red' : '')}
             onClick={()=> {setColor ('red');handleRed()}}>
            0m
            </div>
        </div>
        </>
    )}