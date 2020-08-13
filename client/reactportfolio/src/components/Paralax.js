import React from "react";
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import {Parallax} from 'react-materialize'


const Paralax = () => {
    return (
      
<div>
  
  <Parallax
    image={<img alt="parallax" src="./images/geometric.jpg"/>}
    options={{
      responsiveThreshold: 0
    }}
  />
</div>
  
     )
  }


  export default Paralax;