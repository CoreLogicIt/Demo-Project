import React from "react";

import { Typography, Box, Card } from "../../constants/MuiConstants";

import UserIcon from "../../assets/images/usericon.svg";

import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

const ChartBox = (props) => {
  console.log(props);

  return (
    <Card
      sx={{
        p: "1em",
        background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
        color: "white",
        border: "1px solid grey",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img width={"40px"} src={UserIcon} alt="user" />
        <Typography component={"span"} fontWeight={"600"} fontFamily={"Inter"}>
          Total Users
        </Typography>
      </Box>

      <Box height={"150px"}>
        <ResponsiveContainer width="99%" height={"100%"}>
          <LineChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "transparent", border: "none" }}
              labelStyle={{ display: "none" }}
              position={{ x: 10, y: 70 }}
            />
            <Line
              type="monotone"
              dataKey={props.dataKey}
              stroke={props.color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      <Typography
        paragraph
        fontSize={"1.2rem"}
        fontWeight={"600"}
        fontFamily={"Inter"}
      >
        200
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          paragraph
          color="rgb(136, 132, 216)"
          fontWeight={"300"}
          fontFamily={"Inter"}
        >
          View all
        </Typography>
        <Box>
          <Typography
            textAlign={"right"}
            color={"limegreen"}
            margin={"0"}
            paragraph
            fontSize={".9rem"}
            fontWeight={"600"}
            fontFamily={"Inter"}
          >
            45%
          </Typography>
          <Typography
            margin={"0"}
            paragraph
            fontSize={".9rem"}
            fontWeight={"300"}
            fontFamily={"Inter"}
          >
            This Month
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default ChartBox;
