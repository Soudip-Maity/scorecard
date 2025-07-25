import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function H2h() {
  const [hdata, sethdata] = useState([]);
  const { tid } = useParams();
  const url = `https://mysite-r0hr.onrender.com/api/tournaments/${tid}/head_to_head`;
  const fetchurl = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((i) => sethdata(i.data));
  };

  useEffect(() => {
    fetchurl();
  }, []);

  console.log(hdata);
  return (
    <div style={{ backgroundColor: "whitesmoke", padding: "10px" }}>
      <div
        style={{
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <strong>Head 2 Head </strong>
      </div>
      <div>
        {hdata?.players?.map((h, index) => (
            <div    style={{
              width: "100%",
              height: "200px",
              backgroundColor: "yellowgreen",
              padding: "10px",
              marginBottom: "10px",
            }}>
          <div
            key={index}
            style={{
              width: "100px",
              height: "30px",
              backgroundColor: "red",
              padding: "10px",
            }}
          >
            <strong>{h.id}--{h.name}</strong>
          </div>
          <div>{hdata.head_to_head[1][2].wins}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
