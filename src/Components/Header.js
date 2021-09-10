import React from 'react';

function Header() {
  return (
    <nav class="navbar navbar-expand-md bg-dark navbar-dark" style = {{fontFamily:"Urbanist"}}>
        <a class="navbar-brand" href="#">Regal</a>
        <i class="fas fa-crown" style = {{color:"#FFD700"}}></i>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav" style = {{justifyContent:"right", margin:"auto", width:"100%", padding:"5px"}}>
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Our Story</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Latest Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Discover</a>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Header;
