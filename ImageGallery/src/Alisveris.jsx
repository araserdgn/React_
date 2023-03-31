import React, { useState } from "react";
import Card from "./Component/Card";

function Alisveris({ users}) {
    const[resim,setResim]=useState(users[0].image);
    const[baslik,setBaslik]=useState(users[0].title);
    const[aciklama,setAciklama]=useState(users[0].description);
    const[search,setSearch]=useState("");
    console.log(resim);

  return (
    <div>
      <div className="container">
        <h1>KURTLAR VADİSİNE HOŞGELDİNİZ</h1>
      <div className="card1">
          <img src={resim} alt="" />
          <h1>{baslik}</h1>
          <h3>{aciklama}</h3>
          {/* <h6>{id}</h6> */}
        </div>


        <div className="arama">
          <input type="text" placeholder="Aramak İstediğin Karakteri yaz" onChange={(e) =>setSearch(e.target.value)} />
        </div>


        <div className="cards">
          {

          users.filter((val) => {
            if(search=="") {
              return val;
            }
            else if(val.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
              return val;
            }
          }).map((users) => {
            return (
              <div className="container" onClick={function() {
                setResim(users.image)
                setBaslik(users.title)
                setAciklama(users.Description)
              }}>
                <Card 
                id={users.id} 
                image={users.image} 
                title={users.title}
                description={users.Description}
               />
              </div>
            );
          })
          
          }
        </div>
      </div>
    </div>
  );
}

export default Alisveris;
