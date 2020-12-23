import React from 'react';
import Node from './Node/Node';
import Astar from '../algorithms/Astar'
//import {dijkstra, getNodesInShortestPathOrder} from '../algorithms/dijkstra';
import './PathFindingVisualizer.css';
import Footer from '../layout/Footer'
import Key from '../layout/Key'
import Header from '../layout/Header'
//const cols = 25;
//const rows = 10;
const cols = 50;
const rows = 20;
const START_NODE_ROW = 0;
const START_NODE_COL = 0;
const END_NODE_ROW = rows-1;
const END_NODE_COL = cols-1;

const PathfindingVisualizer = () => {
    const [Grid, setGrid] = React.useState([]);
    const[Path, setPath] = React.useState([]);
    const[VisitedNodes, setVisitedNodes] = React.useState([]);

    React.useEffect(() =>{
        initializeGrid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const initializeGrid = () => {
        const grid = new Array(rows);

        for(let i = 0; i < rows; i++){
            grid[i] = new Array(cols);
        }

        createSpot(grid);

        setGrid(grid);
        addNeighbors(grid);
        const startNode = grid[START_NODE_ROW][START_NODE_COL]
        const endNode = grid[END_NODE_ROW][END_NODE_COL];
        let path= Astar(startNode,endNode);
        startNode.isWall=false;
        endNode.isWall=false;
        setPath(path.path);
        setVisitedNodes(path.visitedNodes);
    };
    
    //parses through grid creating personal spots for each point
    const createSpot = (grid) => {
        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                grid[i][j] = new Spot(i,j);
            }
        }
    };
    const addNeighbors =(grid) =>{

        for(let i=0;i<rows;i++){
            for(let j=0;j<cols;j++){
                grid[i][j].addneighbors(grid);
                //if((i===4)&&(j===5))console.log(grid[i][j]);
            }
        }

    }

    //spot constructor
    function Spot(i,j) {
        this.x = i;
        this.y = j;
        this.g =0;
        this.f=0;
        this.h=0;
        this.isWall = false;
        if(Math.random(1)<.2){this.isWall=true;}
        this.neighbours=[];
        this.previous= undefined;
        this.addneighbors = function(grid){
            let i = this.x;
            let j = this.y;
            if(i>0) this.neighbours.push(grid[i-1][j]);
            if(i< rows-1) this.neighbours.push(grid[i+1][j]);
            if(j>0) this.neighbours.push(grid[i][j-1]);
            if(j< cols -1) this.neighbours.push(grid[i][j+1]);
        }
        this.isStart = this.x === START_NODE_ROW && this.y === START_NODE_COL;
        this.isEnd = this.x === END_NODE_ROW && this.y === END_NODE_COL;
        //need more for algorithm
    }

    const gridwithNode = (
        <div>
            {Grid.map((row,rowIndex) => {
                return (
                    <div key={rowIndex} className = "rowWrapper">
                        {row.map((col,colIndex) => {
                            const {isStart, isEnd, isWall}= col;

                            return <Node key={colIndex} isStart={isStart} isEnd={isEnd} row={rowIndex} col={colIndex} isWall={isWall}></Node>;
                        })}
                    </div>
                );
            })}
        </div>
    );
    const visualizeShortestPath= (shortestPathNodes) => {
        for(let i =0;i<shortestPathNodes.length;i++){
            setTimeout(() => {
                var node= shortestPathNodes[i];
                document.getElementById(`node-${node.y}-${node.x}`).className="node node-shortest-path";
            } ,10*i);
            }
    }
    const visualizePath =()=>{
        for(let i =0;i<=VisitedNodes.length;i++){
            if(i===VisitedNodes.length){
                setTimeout(()=>{
                    visualizeShortestPath(Path);
                },20*i);
            }else{
                setTimeout(() => {
                    var node= VisitedNodes[i];
                    document.getElementById(`node-${node.y}-${node.x}`).className=
                    'node node-visited';     
                },20*i);
            }
        }
    };
            console.log(Path);
    return(
       <div> 
           <Header click={visualizePath}/>
           <Key/>
        <div className = "Wrapper">
            {gridwithNode}
            
        </div>
        <Footer/>
        </div>
    );
}
export default PathfindingVisualizer;

