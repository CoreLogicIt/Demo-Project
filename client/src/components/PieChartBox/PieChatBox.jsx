import { ResponsiveContainer, PieChart, Cell, Tooltip, Pie } from "recharts";

import { Box, Card, Typography } from "../../constants/MuiConstants";

const data = [
  { name: "Real Estate", value: 400, color: "#0088FE" },
  { name: "Immigrant", value: 300, color: "#00C49F" },
  { name: "Lawyer", value: 300, color: "#FFBB28" },
  //   { name: "Tablet", value: 200, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <Card
      sx={{
        background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
        color: "white",
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "1em",
        }}
      >
        <Typography
          paragraph
          fontWeight={"800"}
          fontFamily={"Inter"}
          fontSize={"2rem"}
        >
          Leads by Source
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <ResponsiveContainer width="99%" height={300}>
            <PieChart>
              <Tooltip
                contentStyle={{ background: "white", borderRadius: "5px" }}
              />
              <Pie
                data={data}
                innerRadius={"70%"}
                outerRadius={"90%"}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            fontSize: "14px",
          }}
        >
          {data.map((item) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
              key={item.name}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: item.color,
                  }}
                />
                <Typography
                  paragraph
                  fontFamily={"Inter"}
                  fontWeight={"300"}
                  my={"1em"}
                >
                  {item.name}
                </Typography>
              </Box>
              <Typography paragraph fontFamily={"Inter"} fontWeight={"300"}>
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export default PieChartBox;
