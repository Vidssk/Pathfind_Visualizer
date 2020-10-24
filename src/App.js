import React  from 'react';
import './App.css';
import PathFindingVisualizer from './PathFindingVisualizer/PathFindingVisualizer';
//import Header from './layout/Header'
import Footer from './layout/Footer'
import Key from './layout/Key'
import Header from './layout/Header'
function App() {
  return (
    <div className="App">
      <Header />
      <Key />
      <PathFindingVisualizer></PathFindingVisualizer>
      <Footer />
    </div>
  
  );
}



export default App;
