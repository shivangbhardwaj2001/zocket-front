import React from 'react';
import logo from '../images/logo.jpeg'
import home from '../images/home.jpeg'
import campaign from '../images/campaign.jpeg'
import products from '../images/products.jpeg'
import customers from '../images/customers.jpeg'

export const Sidenavbar=() =>{
    return(
        <>
<div class="logo"><img src={logo}  width="60px" height="60px" /></div>
<div class="home"> <img src={home}  width="45px" height="45px" /><br/> home </div>
<div class="campaign"><img src={campaign}  width="45px" height="45px" /><br/> campaign </div>
<div class="products"> <img src={products}  width="45px" height="45px" /><br/> products</div>
<div class="customers"> <img src={customers}  width="45px" height="45px" /><br/> customers</div>
</>

    );
}
