import React from "react";
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';


const NavbarContent = () => {

    return (
        <div class="col s10">
            <a href={`http://localhost:3000/`} class="brand-logo">Marlon Mora</a>
            <a href={`http://localhost:3000/`} class="sidenav-trigger" data-target="mobile-links">
              <i class="material-icons">menu</i>
            </a>

            <ul class="right hide-on-med-and-down">

              <li><button id="about" class="black waves-effect waves-light white-text btn-flat">About</button></li>
            </ul>
        </div>
  )
}


export default NavbarContent;