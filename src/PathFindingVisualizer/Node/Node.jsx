import React from "react";
import "./Node.css";
import {ReactComponent as Wall} from '../../icons/wall.svg'
import {ReactComponent as StartNode } from '../../icons/button.svg';
import {ReactComponent as EndNode} from '../../icons/TAM-Logo.svg';
const Node = ({isStart, isEnd, row, col, isWall}) => {
    const classes = isStart ? "node-start" : isWall ? "isWall" : isEnd ? "node-end" : "";
    if(isStart){
    return (
        <div className = {`node ${classes}`} id ={`node-${col}-${row}`}>
            {<StartNode/>}
        </div>
    );
    }else if(isEnd){
        return (
            <div className = {`node ${classes}`} id ={`node-${col}-${row}`}>
                {<EndNode/>}
            </div>
        );
    }else if(isWall){
        return(     
        <div className = {`node ${classes}`} id ={`node-${col}-${row}`}>
            {<Wall/>}
        </div>
        );
    } else{
            return (
                <div className = {`node ${classes}`} id ={`node-${col}-${row}`}>
                </div>
            );
    }
}

export default Node;