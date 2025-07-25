import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";

export default function SuperOver({ name, matches }) {
  console.log(matches);
  const { userId } = useParams();

  const playersnames = [
    ...new Set(
      matches.flatMap((m) =>
        [...m.winners, ...m.losers].map((player) => player.name)
      )
    ),
  ];
  // console.log(playersnames);

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        {
          <TableContainer component={Paper}>
            <Table>
              <TableHead style={{ backgroundColor: "lightgray" }}>
                <TableRow>
                  <TableCell>
                    <strong>Match #</strong>
                  </TableCell>
                  {playersnames.map((player) => (
                    <TableCell key={player} align="center">
                      <strong>{player}</strong>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody style={{ overflow: "auto" }}>
                {matches.map((match, matchIndex) => (
                  <TableRow key={matchIndex}>
                    <TableCell>Match {matchIndex + 1}</TableCell>
                    {playersnames.map((playerName) => {
                      const isWinner = match.winners.find(
                        (p) => p.name === playerName
                      );
                      const isLoser = match.losers.find(
                        (p) => p.name === playerName
                      );

                      return (
                        <TableCell key={playerName} align="center">
                          <Box
                            style={{
                              backgroundColor: isWinner
                                ? "rgb(187 247 208 )"
                                : isLoser
                                ? "rgb(255, 204, 203 )"
                                : "",
                              borderRadius: "20px",
                            }}
                          >
                            {isWinner ? "🥳" : isLoser ? "😭" : "🤡"}
                          </Box>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        }
      </div>
    </div>
  );
}
