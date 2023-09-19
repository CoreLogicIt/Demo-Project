import React from "react";

import { Card, Box, Typography } from "../../../constants/MuiConstants";

import { topDealUsers } from "../../../data";

const Content = () => {
  return (
    <Card sx={{ my: "2em" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gridAutoRows: "minmax(180px,auto)",
          gridGap: "10px",
          maxWidth: { lg: "1200px", lg: "1700px" },
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            gridColumn: "span 2",
            gridRow: "span 2",
          }}
        >
          <Card
            sx={{
              p: "1em",
              background:
                "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
              color: "white",
            }}
          >
            <h1>Top Deals</h1>

            {topDealUsers.map((topDeal) => (
              <Box key={topDeal.id}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    my: "1em",
                    fontFamily: "Inter sans-serif",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                      src={topDeal.img}
                      alt="top-deal-icon"
                    />
                    <Box ml={"1em"}>
                      <Typography variant="body2" fontWeight={600}>
                        {topDeal.username}
                      </Typography>
                      <Typography variant="body2" fontWeight={300}>
                        {topDeal.email}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography paragraph>${topDeal.amount}</Typography>
                </Box>
              </Box>
            ))}
          </Card>
        </Box>

        <Box
          sx={{
            gridColumn: "span 2",
            gridRow: "span 1",
            background:
              "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
            color: "white",
          }}
        >
          2
        </Box>
        <Box
          sx={{
            background:
              "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
            color: "white",
            gridColumn: "span 2",
            gridRow: "span 1",
          }}
        >
          3
        </Box>
        <Box
          sx={{
            background:
              "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
            color: "white",
            gridColumn: "span 4",
            gridRow: "span 2",
          }}
        >
          4
        </Box>
        <Box
          sx={{
            background:
              "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
            color: "white",
            gridColumn: "span 4",
            gridRow: "span 2 ",
          }}
        >
          5
        </Box>
        <Box
          sx={{
            background:
              "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
            color: "white",
            gridColumn: "span 4",
            gridRow: "span 2 ",
          }}
        >
          6
        </Box>
      </Box>
    </Card>
  );
};

export default Content;
