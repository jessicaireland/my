import React, { Component } from "react";
import{withRouter} from "react-router-dom";


class Clock extends Component {
    constructor(props) {
        super(props);

    this.state = {
        date: new Date()
    };
    }

componentDidMount() {
    this.timerId = setInterval(
        () => this.tick(),
        1000
    )
}

componentWillUnmount() {
    clearInterval(this.timerId.Id);
}

    tick() {
        this.setState({
            date: new Date()
        });
    }
render(){
    return (
        <div style={styles.clockStyle}>
         
            <h2 style={styles.titleStyle} >Welcome Back!</h2>
            <h2>The time is {this.state.date.toLocaleTimeString()} </h2>
        
        </div>
    )
}
}
const styles ={
    clockStyle:{
  backgroundImage:' url("https://st2.depositphotos.com/1187791/8866/i/950/depositphotos_88660944-stock-photo-pink-sakura-blossom-bright-spring.jpg")',   
  backgroundAttachment: 'fixed',
  backgroundSize:' cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 400,
  height: 800,
  },
  titleStyle:{
      padding: 150,
      color: "rgb(24, 44, 87)",
      fontWeight: 'bold',
      fontSize: '4em',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
      
  }
};
  

export default withRouter(Clock);