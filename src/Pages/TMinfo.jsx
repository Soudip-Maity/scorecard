import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Testmatches from "../Components/Testmatches";
import T10matches from "../Components/T10matches";
import Solotest from "../Components/Solotest";
import SuperOver from "../Components/SuperOver";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function TMinfo() {
  const { userId } = useParams();
  const a = useParams();
  const url = `https://mysite-r0hr.onrender.com/api/tournaments/${userId}`;
  const [Tinfo, setTinfo] = useState([]);
  const fetchinfo = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((i) => setTinfo(i));
  };

  useEffect(() => {
    fetchinfo();
  }, []);

  console.log(Tinfo);
  console.log(a);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        boxSizing: "border-box",
        backgroundColor: "turquoise",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
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

      <div
        style={{
          width: "100%",
          boxSizing: "border-box",
          overflow: "auto",
        }}
      >
        {Tinfo.tour_type === "t10" ? (
          <T10matches name={Tinfo.name} matches={Tinfo.matches} />
        ) : Tinfo.tour_type === "test" ? (
          <Testmatches name={Tinfo.name} matches={Tinfo.matches} />
        ) : Tinfo.tour_type === "solo_test" ? (
          <Solotest name={Tinfo.name} matches={Tinfo.matches} />
        ) : Tinfo.tour_type === "super_over" ? (
          <SuperOver name={Tinfo.name} matches={Tinfo.matches} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
