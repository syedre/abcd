import React from 'react';
import logo from './graph.jpg';
import circle from './circle.png';

class Body extends React.Component {
  
    render() {
    return ( 
        <div>
        <div class ="ui  aligned container"style={{marginTop:'40px',marginLeft:'500px'}}>
        <div class="ui equal width grid">
        <div class="three wide column">
          <div class="ui segment" style ={{backgroundColor:'#f2f2f2'}}>
          <div class ="inline field">
              <div  style={{fontSize:'10px',float:'left'}}> BUDGET
              <div style={{fontSize:'15px'}}> $25,000
                </div>
                 </div>
              <button class="circular ui icon button" style={{backgroundColor:'red',marginLeft:'50px'}}>
              <i class="money bill alternate outline icon" style={{color:'white'}}></i>
              </button>
           </div>
      
          </div>
        </div>
        <div class="three wide column">
          <div class="ui segment" style ={{backgroundColor:'#f2f2f2'}}>

          <div class ="inline field">
              <div  style={{fontSize:'10px',float:'left'}}> Total users 
              <div style={{fontSize:'15px'}}>
                1,400
                </div>
              </div>
              <button class="circular ui icon button" style={{backgroundColor:'green',marginLeft:'50px'}}>
              <i class="users icon" style={{color:'white'}}></i>
              </button>
           </div>
          
          </div>
        </div>
        <div class="three wide column">
          <div class="ui segment" style ={{backgroundColor:'#f2f2f2'}}>
            <div class ="inline field">
              <div  style={{fontSize:'10px',float:'left'}}> TASKS 
              <div style ={{fontSize:'15px'}}>
                75.5%
                </div>
                 </div>
              <button class="circular ui icon button" style={{backgroundColor:'blue',marginLeft:'50px'}}>
              <i class="chart bar icon" style={{color:'white'}}></i>
              </button>
           </div>
            </div>
          
        </div>
        <div class="four wide column">
          <div class="ui segment" style ={{backgroundColor:'#0000b3',marginLeft:'40px'}}>
            <div class ="inline field">
              <div  style={{fontSize:'10px',float:'left',color:'white'}}> TOTAL PROFIT
              <div style ={{fontSize:'15px'}}>
                $23,20022
                </div>
                 </div>
              <button class="circular ui icon button" style={{backgroundColor:'white',marginLeft:'60px'}}>
              <i class="dollar sign icon" style={{color:'black'}}></i>
              </button>
           </div>
            </div>
          
        </div>
      </div>

      </div>

      <div class="ui container">
        <div class="inline field">
      <div class="ui centered large image" style={{maxWidth:'700px',marginTop:'15px',marginLeft:'120px'}}>
          <img class="ui mini left floated" 
          src={logo}>
          
          </img>
      </div>
      <div class="ui  medium image" style={{maxWidth:'700px',marginTop:'15px',marginLeft:'100px'}}>
          <img class="ui mini left floated" 
          src={circle}>
          
          </img>
      </div>

      </div>
      </div>
      
      <div class ="ui grid" style={{marginLeft:'50px'}}>
        
        <div class ="four wide column" style={{marginRight:'50px'}}>
        
        <div class="ui segment" style={{backgroundColor:'#f2f2f2'}}>
          <h5>latest products</h5>
           <div class ="inline field">
           <i class="dropbox icon" style={{color:"#4d4dff",fontSize:'25px'}}></i>
           <label style={{marginLeft:'20px'}}>DropBox
           <div style ={{marginLeft:'35px'}}>skcjkj ksjdvkcj kjac</div></label>
           
           </div>
           <div style={{marginTop:'20px'}}> 
           <div class ="inline field">
           <i class="houzz icon" style={{color:"#99ff33",fontSize:'25px'}}></i>
           <label style={{marginLeft:'20px'}}>DropBox
           <div style ={{marginLeft:'35px'}}>skcjkj ksjdvkcj kjac</div></label>
           
           </div>

           </div>
           
        </div>

        
        </div>
        <div class ="eight wide column">
        <table class="ui single line table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Registration Date</th>
      <th>E-mail address</th>
      <th>Premium Plan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Lilki</td>
      <td>September 14, 2013</td>
      <td>jhlilk22@yahoo.com</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Jamie Harington</td>
      <td>January 11, 2014</td>
      <td>jamieharingonton@yahoo.com</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Jill Lewis</td>
      <td>May 11, 2014</td>
      <td>jilsewris22@yahoo.com</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>
        </div>


      </div>
      </div>
    )
  }
}
export default Body;
