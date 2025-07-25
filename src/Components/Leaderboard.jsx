import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";




export default function Leaderboard() {
  const [ldata, setldata] = useState([]);
  const { tid } = useParams();
  const bc = useParams();
  console.log("params (bc):", bc);

  const url = `https://mysite-r0hr.onrender.com/api/tournaments/${tid}/leaderboard`;
  const fetchapi = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((i) => setldata(i.data));
  };

  useEffect(() => {
    fetchapi();
  }, []);

  console.log("data :", ldata);

  return (
    <div style={{ padding: "10px", backgroundColor: "whitesmoke" ,height:"100vh",boxSizing:"border-box"}}>
      <div style={{ paddingBottom: "20px" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              height: "40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ArrowBackIcon /> <p>Tournaments</p>
          </Button>
        </Link>

      </div>
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={{backgroundColor:"lightgray"}}>
                <TableCell>
                  <strong>Rank #</strong>
                </TableCell>
                {ldata?.columns?.map((header, index) => (
                  <TableCell>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
                  {ldata?.rows?.map((header, index) => (
              <TableRow key={index} style={{ backgroundColor:index<=2? "rgb(187 247 208 )":"rgb(255, 204, 203 )"}}>

                  <TableCell>{index+1}</TableCell>
                 { header.map((cell)=>(
                  <TableCell>{cell}</TableCell>

                 ))}
              </TableRow>

                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
