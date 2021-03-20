//import { computeHeadingLevel } from "@testing-library/dom";
import React, {Component} from "react";
import "./App.css";
import taswirti from './pic/MyPic.jpg'
class App extends Component {

  state ={

  fullName:"Abir Ben Said",
  bio:"Wizard stuck in muggles' world",
  src: taswirti,
  profession: 'An Undercover Wizard',
  show: false,
  };

  handleClick=()=>this.setState({show:!(this.state.show)});

render (){
return (
  <React.Fragment>
<div className={this.state.show? "appear":"disappear"} style={{borderStyle: "double",width: "fit-content", padding: "10px"}}>
<h1> My name is {this.state.fullName}</h1>
<h2> i'm {this.state.profession} </h2>
<h2>here's a small bio: {this.state.bio} </h2>

<img style={{borderRadius: '8px'}} src={this.state.src} alt="fsdfsdf"/>
</div>
<div className="appear">
 <button onClick={this.handleClick}> Show - Hide</button> 
 </div>
 </React.Fragment>
)
}
}
export default App




//export default class App extends React.Component {

//  handleClick=()=>this.setState({shown:!(this.state.shown)});
  
//  render() {
//    return(
//      <React.Fragment>
//        <div className={this.state.shown? "appear":"dissapear"}>
//          <h1 style={{fontStyle:'italic'}}>Hello my name is {this.state.fullName}</h1>
//          <h2>here's my story {this.state.bio} </h2>
//        <React.Fragment>
//           <img style={{borderRadius: '8px'}} src={this.state.src} alt=''/>
//          </React.Fragment>
//          <h2>I am a {this.state.profession} </h2>
//        </div>
//        <div className="appear">
//          <button  onClick={this.handleClick}> Show/Hide </button>
//        </div>
//      </React.Fragment>
//    )
//  }
// }