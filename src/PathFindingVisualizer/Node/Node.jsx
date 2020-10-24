import React from "react";
import "./Node.css";
import {ReactComponent as StartNode } from '../../icons/button.svg';
import {ReactComponent as EndNode} from '../../icons/TAM-Logo.svg';
const Node = ({isStart, isEnd, row, col}) => {
    const classes = isStart ? "node-start" : isEnd ? "node-end" : "";
    if(isStart){
    return (
        <div className = {`node ${classes}`} id ={`node-(${col},${row})`}>
            {<StartNode/>}
        </div>
    );
    }else if(isEnd){
        return (
            <div className = {`node ${classes}`} id ={`node-(${col},${row})`}>
                {<EndNode/>}
            </div>
        );
    } else{
            return (
                <div className = {`node ${classes}`} id ={`node-(${col},${row})`}>
                </div>
            );
    }
}

export default Node;