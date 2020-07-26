import React from 'react';

import abc from './avatar.jpg'

import './App.css';

function App() {
  return (
    <div >

    
      <div class="ui vertical menu">
        <div style={{marginBottom:'30px'}}>   
        <img class="ui  mini circular  image" src={abc} style={{marginLeft:'60px',marginTop:'20px'}}/>
        <h5 style={{marginLeft:'20px'}}>Syed Rehan Ahmed</h5>
        </div>
        <a class="item">
        <i class="grid layout icon"></i> Dashboard
        </a>

        <a class="item">
        <i class="users icon"></i> Users
        </a>

        <a class="item">
        <i class="shopping bag icon"></i> Products
        </a>

        <a class="item">
        <i class="unlock alternate icon"></i> Authentication
        </a>

        <a class="item">
        <i class="font icon"></i> Typography
        </a>

        <a class="item">
        <i class="image icon"></i> Icons
        </a>

        <a class="item">
        <i class="address book icon"></i> Account
        </a>

        <a class="item">
        <i class="cog icon"></i> Settings
        </a>
        
      </div>
      

      <div style={{marginLeft:'30px'}}>

      <i class="music icon" style={{fontSize:'30px',color:'blue'}}></i>
        
        <p>Upgrade  </p>
        <div>
          upgrade to devices 
         </div>


        <button class="ui violet button" style={{marginTop:'10px'}}>Upgrade</button>
       </div>

       
    
  
    </div>
  );
}

export default App;
 