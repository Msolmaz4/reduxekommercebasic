import React, { useEffect } from 'react'
import ProductComponents from './ProductComponents';
import {useDispatch, useSelector} from 'react-redux'
import { setProducts } from '../redux/actions/productAction';
import axios from 'axios'
const ProductListing =()=>{

    
 const products =useSelector((state)=>state)
 const dispatch =useDispatch();

 const fetchProducts = async () =>{
    const response =await axios
    .get('https://fakestoreapi.com/products')
    .catch((err)=>{
        console.log('ERR',err)
    })
    dispatch(setProducts(response.data))
 }

 useEffect(()=>{
     fetchProducts()
 },[])
 console.log('PRODUCTS',products)
    return (
        <div className='ui grid container'>
            <ProductComponents/>
        </div>
    )
}
export default ProductListing;