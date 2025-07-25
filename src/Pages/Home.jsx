import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import GroupsIcon from "@mui/icons-material/Groups";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setdata] = useState([]);

  const url = "https://mysite-r0hr.onrender.com/api/tournaments";

  const fetchInfo = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((d) => setdata(d.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        padding: "30px",
        backgroundColor: "whitesmoke",
        // background: "#9b2a64",
      }}
    >
      {console.log(data)}

      <div
        style={{
          background:
            "radial-gradient(circle,rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)",
          borderTopLeftRadius: "60%",
          borderTopRightRadius:"5px"
        }}
      >
        <>
          <img
            src="/4eb63370-5e8b-466a-a34e-d3ab4cd24274.jpg"
            alt="Spirit Premier League"
            style={{ height: "200px", width: "200px", borderRadius: "50%" }}
          />
        </>
      </div>
        
      <div >
        <Link to="/players" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            style={{ margin: "10px", width: "150px", height: "40px" }}
          >
            <GroupsIcon
              style={{ paddingBottom: "4px", paddingRight: "10px" }}
            />
            <p>Players</p>
          </Button>
        </Link>
        <Button
          variant="outlined"
          style={{ margin: "10px", width: "150px", height: "40px" }}
        >
          <DataSaverOffIcon
            style={{ paddingBottom: "4px", paddingRight: "10px" }}
          />
          <p>States</p>
        </Button>
        <Button
          variant="outlined"
          style={{ margin: "10px", width: "150px", height: "40px" }}
        >
          <SignalCellularAltIcon
            style={{ paddingBottom: "4px", paddingRight: "10px" }}
          />
          <p>Ranking</p>
        </Button>

    

        <Button
          variant="outlined"
          style={{ margin: "10px", width: "150px", height: "40px" }}
        >
          <LocalFireDepartmentIcon
            style={{ paddingBottom: "4px", paddingRight: "10px" }}
          />
          <p>Rivalry</p>
        </Button>
        <Link to="/Create_Team" style={{ textDecoration: "none" }}>
        <Button
          variant="outlined"
          style={{ margin: "10px", width: "150px", height: "40px" }}
        >
          create team
        </Button>
        </Link>

      </div>

      <div>
        {data
          .slice(0)
          .reverse()
          .map((list, index) => (
            <Link
              to={`/tournament/${list.id}`}
              style={{ textDecoration: "none" }}
            >
              <div
              className="gamename"
                key={index}
                style={{
                  height: "120px",
                  backgroundColor: "lightblue",
                  marginTop: "20px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "20px",
                  paddingRight: "10px",
                  cursor: "pointer",
                  textAlign: "start",
                }}
              >
                <div>
                  <div>
                    <h2>{list.name}</h2>
                  </div>

                  <div
                    style={{
                      color: "green",
                      textAlign: "start",
                      display: "flex",
                      paddingLeft: "10px",
                    }}
                  >
                    <div>
                      <p>Winner : </p>
                    </div>
                    <div>
                      <p>{list.winner?.name || " No winner yet"}</p>
                    </div>
                  </div>
                </div>
                <div>
                  {list.tour_type === "test" ||
                  list.tour_type === "solo_test" ? (
                    <img
                      src="/test_cricket-2f93d4e3da7c78af4d35531f2624d5a4fcf995ec2d2a8b7fded2f4910ea67eb6.png"
                      alt="Description"
                      style={{ width: "150px", height: "100px" }}
                    />
                  ) : (
                    <img
                      src="/image.png"
                      alt="Description"
                      style={{ width: "150px", height: "100px" }}
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
