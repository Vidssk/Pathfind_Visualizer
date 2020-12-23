import React, {useState} from "react";
//import styled from "styled-components";
import logo from '../logo.svg';
import '../App.css';
import '../index.css';
import {ReactComponent as AlgorithmIcon } from '../icons/neural.svg';
import Astar from '../algorithms/Astar'
let Algorithms = ['Depth-first search','Breath-first search','Dijkstra','A* Search', 'Greedy BFS', 'Swarm Algorithm','Convergent Swarm', 'Bidirectional Swarm'];
let Mazes= ['Recursive Division', 'Recursive Division (vertical skew)','Recursive Division (horizontal skew)', 'Random', 'Basic Weight','Simple Stair Pattern'];
let NavItems=['Visualize','Algorithms','Maze','Clear Grid'];
let VisualizeKey="Visualize";
let triggered=0;
let DropDownSelect=0;
let VisualButtonText='Visualize';
function Header(props){
    return(
        <Navbar id='top' click={props.click}>
        </Navbar>

    )
}

function Navbar(props){
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
            <h1 id="Title"><img src={logo} className="App-logo" alt="logo"/>PathFind Visualizer</h1>
            <Visualize id = 'Visualize' key={VisualizeKey} click={props.click} />
            <NavItem  name="Algorithms">
                <DropDownMenu types="algo" />
            </NavItem>
            <NavItem name="Construct Mazes"><DropDownMenu types="maze"/></NavItem>
            <NavItem name="Add Bomb">
            </NavItem>
            <NavItem name="Clear Grid"/>
            <NavItem name="About Project"/>
        </ul>
      </nav>
    );
}
function Visualize(props) {
    return (
        <li className="nav-item">
          <a href="#" className="icon-button"onClick={props.click}>
              {VisualizeKey}
          </a>
        </li>
      );
    }
function NavItem(props) {
    const[open, setOpen] = useState(false);
    var ToggleDrop=() => {
        setOpen(!open)
      /*  if(name==="Algorithms"&&DropDownSelect!==1 && !open){setOpen(!open);DropDownSelect=1;}
        if(name==="Algorithms"&&DropDownSelect===1 && open){setOpen(!open);DropDownSelect=0;}
        if(name==="Construct Mazes"&&DropDownSelect!==1 && !open){setOpen(!open);DropDownSelect=1;}
        if(name==="Construct Mazes"&&DropDownSelect===1 && open){setOpen(!open);DropDownSelect=0;}
        console.log(DropDownSelect);*/
        if(props.id==="Visualize" && triggered===0 && VisualizeKey!=="Visualize"){
            triggered++;
            console.log(VisualizeKey);
        }else if(props.id==="Visualize" && triggered!==0){
            triggered=0;
        }
    }

    return (
      <li className="nav-item">
        <a href="#" className="icon-button"onClick={ToggleDrop}>
            {props.name || VisualizeKey}
        </a>
        {(open && props.children)}
      </li>
    );
}

var clicked= (AlgorithmKey)=>{
    VisualizeKey="Visualize "+AlgorithmKey;
    console.log(VisualizeKey);

}
function DropDownMenu(props) {
    function DropdownItem(props) {
        return (
      <a href="#" className="menu-item" onClick={()=> props.children && clicked(props.children)}>
          {props.children}
      </a>
      );
    }
    function usedList(props){

        const type= props.types;
        if(type==="algo" ){
            var listtype =Algorithms.map((algo) => 
            <DropdownItem AlgorithmKey={algo} key={algo}>{algo}</DropdownItem>);
        }else if(type==="maze"){
            listtype =Mazes.map((Mazes) => 
            <DropdownItem key={Mazes}>{Mazes}</DropdownItem>);      
        }
        return(listtype)
    };
    
    return (
      <div className="dropdown" >
          {usedList(props)}
      </div>
    );
}


  export default Header;

/*function Header(){
    const headerStyle = {
        background:'#c3c3c3' ,
        color: '#7092be',
    }
    const Button = styled.button`
        background-color: #c3c3c3;
        color: #7092be;
        font-size: 17px;
        font-style: bold;
        border: none;
        border-radius: 5px;
        padding: .7em 1.2em;
        margin: 0px 0px;
        padding-top: 30px;
        padding-bottom: 30px;
        cursor: pointer;
        -webkit-transition: background 0.2s ease;
        -moz-transition: background 0.2s ease;
        -o-transition: background 0.2s ease;
        transition: background 0.2s ease;
    `;
    let Algorithms = ['DFS','BFS','Dijkstra','A* Search', 'Greedy BFS', 'Swarm Algorithm',
                    'Convergent Swarm', 'Bidirectional Swarm'];
    let Mazes= ['Recursive Division', 'Recursive Division (vertical skew)',
                'Recursive Division (horizontal skew)', 'Random', 'Basic Weight',
                'Simple Stair Pattern'];
    var clear= true;

    function changeBackground(event) {
        event.target.style.background ="#7092be";
        event.target.style.color = "#c3c3c3";
    }
    function mouseout(event) {
        event.target.style.background ="#c3c3c3";
        event.target.style.color = "#7092be";
    }
    function runMaze(array){
        
    };

    function runAlgorithm(e) {
        clear=false;

    };
    function clearBoard(e){
        clear = true;
    };
    return (
        <header style={headerStyle}>
            <div className="head">
                <div className="webName">
                    <h1>Pathfinding</h1>
                </div>
                <div className="Algorithms">
                <h2> <Button onMouseOver={changeBackground} onMouseOut={mouseout}> Algorithms</Button></h2>
                </div>
                <div className="Maze">
                    <h2><Button onClick={runMaze} onMouseOver={changeBackground} onMouseOut={mouseout}> Maze</Button></h2>
                </div>
                <div className="visualize">
                    <h2><Button onClick={runMaze} onMouseOver={changeBackground} onMouseOut={mouseout}> Visualize</Button></h2>
                </div>
                <div className="clear">
                    <h2><Button onClick={clearBoard} onMouseOver={changeBackground} onMouseOut={mouseout}> Clear</Button></h2>
                </div>

            </div>
        </header>
    );
}


export default Header;
*/
