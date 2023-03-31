import React from 'react'
import { useState,useEffect } from 'react'
import Navbaar from './Navbaar'

const gs={background:"red",color:"yellow"};
const fb={background:"blue",color:"yellow"};
let name="Galatasayar";

function Alistirma({res}) {
  
   const[sayi,setSAyi]=useState(1);
   const[takim,setTakim]=useState(gs);
    useEffect(() => {
        setTimeout(() => {
            alert("Değişim oldu");
        },50);
    },[sayi]);
    //! sayi değiştiğinde olacak OLAYLAR useEfecttedir
  return (
    <div>
        <Navbaar />
       <h1 style={takim}>Benim takımım {name} ve Tıklanma sayısı {sayi}</h1>
       <button onClick={() => {
        setTakim(fb)
        name="Fenerbahce"
        setSAyi(sayi+1)
       }}>Tıkla</button>
        <img src={res} alt="" />
    </div>
  )
}

export default Alistirma