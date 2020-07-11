import React from "react";
import {withRouter} from "react-router-dom"

function Header(props) {
    return(
        <div style={styles.headerStyle}>
   <h1 style={styles.appTitleStyle}>Do Dates</h1>
  
   </div>
    );
}
const styles = {
    headerStyle:{
        border: 'solid 1px rgb(18, 207, 18)',
        margin: '2em',
    },
    appTitleStyle:{
        color: 'rgb(18, 207, 18)',
        textAlign: 'center',
    },
};

export default withRouter(Header);