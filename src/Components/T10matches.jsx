import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
export default function T10matches({ name, matches }) {
  const { userId } = useParams();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          position: "sticky",
          top: "0",
          backgroundColor: "turquoise",
        }}
      >
        <div
          style={{
            backgroundColor: "gray",
            borderRadius: "5px",
            width: "170px",
            height: "38px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <b>🏏{name}</b>
        </div>
        <div>
          <Link to={`/tournament/${userId}/leaderboard`}>
            <Button variant="contained" color="success">
              leaderboard
            </Button>
          </Link>
        </div>
        <div>
          <Link to={`/tournament/${userId}/leaderboard`}>
            <Button variant="contained" color="secondary">
              Head 2 head
            </Button>
          </Link>
        </div>
        <div>
          <Link to={`/tournament/${userId}/leaderboard`}>
            <Button variant="contained" color="warning">
              performance
            </Button>
          </Link>
        </div>
      </div>

      <Box sx={{ flexGrow: 1, padding: "40px" }}>
        <Grid container spacing={{ xs: 2, md: 2 }} columns={12}>
          {matches.map((i, index) =>
            i.match_type === "group" ? (
              <Grid key={index} size={{ xs: 12, sm: 3 }}>
                <Item
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <p style={{ color: "darkgreen", font: "20px" }}>
                    <b>{i.winner.name}</b>
                  </p>{" "}
                  <p>vs</p>{" "}
                  <p style={{ color: "red", font: "20px" }}>
                    <b>{i.loser.name}</b>
                  </p>
                </Item>
              </Grid>
            ) : (
              <Grid key={index} size={{ xs: 12, sm: 12 }}>
                <Item
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <p style={{ color: "darkgreen", font: "20px" }}>
                    <b>{i.winner.name}</b>
                  </p>{" "}
                  <p>vs</p>{" "}
                  <p style={{ color: "red", font: "20px" }}>
                    <b>{i.loser.name}</b>
                  </p>
                </Item>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </div>
  );
}
