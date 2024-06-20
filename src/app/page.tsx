"use client"
import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function Home() {

  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);

  function SendNumbers(e: any){
    const data = {
      first: Number(e.target.Red.value),
      second: Number(e.target.Green.value),
      third: Number(e.target.Blue.value)
    }
    setFirst(data.first)
    setSecond(data.second)
    setThird(data.third)

  }
  
  const hex = RGBtoHex([first, second, third]);
  
  let numbers = new Array<any>()

  function RGBtoHex(decimals = numbers) {
    if(first >= 0 && first <= 255 && second >= 0 && second <= 255 && third >= 0 && third <= 255){
      const RGB = `#${decimals.map((d: any) => d.toString(16).padStart(2, '0')).join('').toUpperCase()}`;
      alert(RGB);
    }else{
      alert("Red, Blue and Green have to be from 0 to 255");
    }
  }


  return (
    <form onSubmit={SendNumbers}>
      <div className="container mt-5 text-center">
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">Red</span>
          </div>
          <input type="number" className="form-control" id="Red" required />
        </div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">Green</span>
          </div>
          <input type="number" className="form-control" id="Green" required />
        </div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">Blue</span>
          </div>
          <input type="number" className="form-control" id="Blue" required />
        </div>
      <button type="submit" className="btn btn-primary">Convert to Hexadecimal</button>
      </div>
    </form>
  );
}
