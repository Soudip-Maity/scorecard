import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";

export default function Solotest({ name, matches }) {
  const { userId } = useParams();

  const allUniqueNames = [
    ...new Set(matches.flat().map((player) => player.name)),
  ];

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
            <Button variant="contained">leaderboard</Button>
          </Link>
        </div>
      </div>

      <div style={{ marginTop: "10px", padding: "20px", overflow: "auto" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Match #</strong>
                </TableCell>
                {allUniqueNames.map((playerName) => (
                  <TableCell key={playerName} align="center">
                    <strong>{playerName}</strong>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {matches.map((match, matchIndex) => (
                <TableRow key={matchIndex}>
                  <TableCell>Match {matchIndex + 1}</TableCell>
                  {allUniqueNames.map((playerName) => {
                    const player = match.find((p) => p.name === playerName);
                    return (
                      <TableCell key={playerName} align="center">
                        {player ? player.point : "-"}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
