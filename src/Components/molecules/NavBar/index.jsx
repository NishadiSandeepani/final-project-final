import React from "react" 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from "bootstrap";
import './index.css';
import theTeaLeaf from'./theTeaLeaf.png';

const NavBar=()=>{
 return(
  <nav class="navbar navbar-expand-lg navbar-light">

  <div class="container-fluid">
  <img src={theTeaLeaf} alt="theTeaLeaf" width="100px" height="100px" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <li class="nav-item">

    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <button class="ttoggle" data-bs-toggle="dropdown" aria-expanded="false">
            Dashboard
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="AdminDashboard">Pesticide</a></li>
            <li><a class="dropdown-item" href="AdminDashboard_1">Fertilizer</a></li>
            <li><a class="dropdown-item" href="AdminDashboard_2">Money</a></li>
          </ul>
        </li>
      </ul>
    </div>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="login">Login</a>
        </li>
        <li class="nav-item">

          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="LoginM">Manager</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Login">Supplier</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="LoginC">Customer</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="SupplierDashboard">Test</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="loan"><div class="dropdown">
  <button class="tog" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Loan
  </button>
  <ul class="dropdown-menu">

    <li><a class="dropdown-item" href="Loan">monetary</a></li>

    <li><a class="dropdown-item" href="Monetary">monetary</a></li>

    <li><a class="dropdown-item" href="Pesticide">pesticides</a></li>
    <li><a class="dropdown-item" href="Fertilizer">fertilizer</a></li>
  </ul>
</div>

        </a>
        </li>
       </ul>

       

    </div>

  </div>
  </nav>

 )
};
export default NavBar;