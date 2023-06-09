import React from 'react';
import '../style.css';

export default function Header(props) {

 function handleClick(){
  console.log("clicked");
 }
  return (
    <nav >
    <div className="header"> 
        <h2>Meme Generator</h2>
        <h4>React course - project 3</h4>
        <div>
        <button className='toggle' onClick={handleClick}>Enable dark</button>
        </div>
</div>
</nav>
        
    
  )
}
