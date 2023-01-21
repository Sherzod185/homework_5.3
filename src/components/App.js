import React from "react";
import { Card } from "./Card";
const years = new Date().getFullYear()
export const App=()=>{
  return <div className="container">
  <h1 className="heading">Product</h1>
    <div className="cardBlock">
<Card />
</div>
<p className="text">Copyright &copy; {years}</p>
  </div>
}