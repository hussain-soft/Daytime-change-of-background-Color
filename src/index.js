import React from 'react';
import ReactDOM from 'react-dom';
import'./index.css';

let currDat = new Date();
currDat = currDat.getHours();
let greet;
const cssSty={};

if (currDat>=1 && currDat <12){
  greet=' Good Morning ';
  cssSty.color= 'green';
}else if( currDat >=12 && currDat<19){
  greet='Good AfterNoon';
  cssSty.color= 'orange';
}else{
  greet='Good Night';
  cssSty.color= 'black';
}

ReactDOM.render(<>

  <div>

  <h1>hellow sir, <span style={cssSty}>{greet}</span></h1>
  
  </div></>
  ,
  document.getElementById('root')
);
