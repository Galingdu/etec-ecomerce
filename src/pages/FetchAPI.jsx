import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchAPI() {
    const [name_,setName] = useState([])
    useEffect(()=>{
        const resAPI = async ()=>{
            try{
                const API = await axios.get('https://product-server-json.onrender.com/products')
                console.table(API.data)
                setName(API.data)
            }catch(e){
                console.log(e.message)
            }
            finally{
                
            }
           
        }
        resAPI()
    },[])
    
  return (
    
    <div>
        {
            name_.map((v,i)=>
                <div key={i}>
                   <li> {v.name}</li>
                   <li> {v.price}</li>
                   <li> {v.description}</li>
                   <li> {v.rating}</li>
                   <li> {v.sku}</li>
                   <li> <img style={{height:"200px",border:"1px solid black"}} src={v.image}  alt="" /></li>
                </div>
            )
        }
    </div>
  )
}

export default FetchAPI
