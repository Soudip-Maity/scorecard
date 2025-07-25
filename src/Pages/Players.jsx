import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Players() {
  const [pinfo, setpinfo] = useState([]);
  const url = "https://mysite-r0hr.onrender.com/api/players";

  const fetchinfo = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((i) => setpinfo(i.players));
  };
  useEffect(() => {
    fetchinfo();
  }, []);
  console.log(pinfo);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px",padding:"10px" }}>
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
        <div style={{ display: "flex", gap: "20px" }}>
          <Button variant="contained">Solo test record</Button>
          <Button variant="contained">test record</Button>
          <Button variant="contained">t10 record</Button>
        </div>
        <div
          style={{
            // border: "1px solid ",
            paddingTop: "20px",
            padding: "10px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Points #</strong>
                  </TableCell>
                  {pinfo.map((player) => (
                    <TableCell key={player} align="center">
                      <strong>{player.name}</strong>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody></TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
