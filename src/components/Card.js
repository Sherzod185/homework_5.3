import axios from "axios";
import React, { useState } from "react";
export const Card = () => {
  const [data, setData]=useState([])
  React.useEffect(()=>{
axios.get("https://fakestoreapi.com/products").then((res)=>(setData(res.data)))
  },[])
  return (data.map((item)=>{
    return (
      <div className="card">
        <div className="topCard">
          <img src={item.image} alt="" />
        </div>
        <div className="bottomCard">
          <h2>Price:{item.price}💲</h2>
          <h2>Rating:{item.rating.rate}⭐</h2>
          <strong>Count:{item.rating.count}</strong>
        </div>
      </div>
    );
  })) 
};
