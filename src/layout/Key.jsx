import React from "react";
import '../App.css';
import ReactLogo from '../icons/button.svg';
import end from '../icons/TAM-Logo.svg';
import wall from '../icons/wall.svg'
import weight from '../icons/weight.svg';
function Key() {
   // function textChoice() {
     //   return;
    //}
    //li { list-style-image: url(img/iphone.png); } 
    return (
        <div >
            <ul style={{textAlign: 'center'}} id="horizontal-list">
                <li>< img style={image} src={ReactLogo} alt='Start Node'/> Start Node</li>
                <li><img style={image} src={end} alt='End Node' /> End Node</li>
                <li><img style={image} src={weight} alt='Weight Node' /> Weight Node</li>
                <li><img style={square} src={end} alt='unvisited Node' />Unvisited Node</li>
                <li><img style={square} src={end} alt='visited Node' />Visited Node</li>
                <li><img style={square} src={end} alt='shortest path'/>Shortest Path</li>
                <li><img style={square} src={wall} alt='wall node'/>Wall Node</li>
            </ul>
            <h3 style={text}>This is my pathfinder Visualizer</h3>
        </div>
    );
}
const text = {
    fontStyle: 'italic',
    fontSize: '15px',
    textAlign:  'center',
    color: 'var(--bg)',
    margin: '0',
}
const image = {
    width: '20px',
    height: '20px',
}//&emsp
const square = {
    width: '15px',
    height: '15px',
}
export default Key;