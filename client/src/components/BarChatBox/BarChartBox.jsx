import { ResponsiveContainer, BarChart, Tooltip, Bar } from "recharts";

import { Box, Card, Typography } from "../../constants/MuiConstants";

const BarChartBox = (props) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        p: "1em",
        background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
        color: "white",
        border: "1px solid grey",
      }}
    >
      <Typography
        paragraph
        fontWeight={"800"}
        fontFamily={"Inter"}
        fontSize={"2rem"}
      >
        {props.title}
      </Typography>
      <Box className="chart">
        <ResponsiveContainer width="99%" height={200}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
};

export default BarChartBox;
