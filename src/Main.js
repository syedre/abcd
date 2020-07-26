import React from 'react';
import Body from './Body';
import App from './App';

class Main extends React.Component {
  
    render() {
    return ( 
        <div>
           <h1 class="ui block header" style={{backgroundColor:'#0000cc'}}>
             
           </h1>
         <div class ="ui grid">
            <div class ="left floated column" style={{marginTop:'0px'}}>
                <App/>
            </div>
        <Body />
         
       
       
    </div>
    </div>
    )
  }
}
export default Main;
