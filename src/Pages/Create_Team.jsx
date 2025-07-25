import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Create_team() {
     const [pinfo, setpinfo] = useState([]);
     const [selplayer,setselplayer]=useState([])
      const url = "https://mysite-r0hr.onrender.com/api/players";
    
      const fetchinfo = async () => {
        await fetch(url)
          .then((res) => res.json())
          .then((i) => setpinfo(i.players));
      };
      useEffect(() => {
        fetchinfo();
      }, []);

      const handleclick=(value)=>{
     setselplayer ([...selplayer,value])
      }

      console.log(selplayer);

  

  return (
    <div style={{padding:"10px"}}>
        <div style={{display:"flex", justifyContent:"space-around",padding:"10px"}}> 
            {pinfo.map((p)=>(
                <Button variant="contained" 
               onClick={()=>handleclick(p.name)}
               value={p.name}
                >{p.name} </Button>
            ))}
        </div>
        <div style={{display:"flex" , justifyContent:"space-between"}}>
            {
             
            [...new Set (selplayer.flat().map((man,index)=>(
               (index+1)%2===0?
                <div style={{backgroundColor:"red"}}>{man}</div>:
                <div style={{backgroundColor:"green"}}>{man}</div>
             )
                 
             ))]
            }
        </div>
    </div>
  )
}
