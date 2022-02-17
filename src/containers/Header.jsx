import React from 'react'
import {Link } from 'react-router-dom'
import ProductListing from './ProductListing';

 function Header() {
   
  return (
    <div className='ui fixed menu'>

        <div className='ui contanier center'>
            <h2>FakeShop</h2>
            <Link to="/">{<ProductListing/>}</Link>
           
        </div>
    </div>
  )
}


export default Header;