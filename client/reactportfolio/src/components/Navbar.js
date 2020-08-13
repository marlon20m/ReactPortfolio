import React from "react";
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import NavbarContent from "./NavbarContent";


const Navbar = () => {

    return (
<div>
<div id="navbar" class="navbar-fixed">
    <nav class="nav-wrapper black darken-1">
      <div class="row">
        <div class="col s1">
          <NavbarContent />
    </div>
   </div>
  </nav>
 </div>
</div>
  )
}


export default Navbar;