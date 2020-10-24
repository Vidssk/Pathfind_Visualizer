import React from "react";
import '../App.css';

function Footer() {
    return (
        <footer style={footerStyle}>
            <h5>About</h5>

        </footer>
    );
}
const footerStyle = {
    position:'absolute',
    marginTop: '10px',
    left:'0',
    bottom:'0',
    right:'0',
    textAlign:  'center',
    background:'#242526' ,
    color: '#dadce1',
    
}
export default Footer;

