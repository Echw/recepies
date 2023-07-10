"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardHeader, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { grey } from "@mui/material/colors";
import RecipeIngridientsColumn from "../ui/RecipeIngridientsColumn";

export default function RecipeDetailsBox() {
  return (
    <Card
      sx={{
        display: "flex",
        height: {},
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <CardMedia
        sx={{
          width: { xs: "100%", md: "50%" },
          // height: { xs: "10rem", md: "100%" },
        }}
        image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="pancakes"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: { xs: "1rem 0rem 1rem 2rem", md: "2rem 0rem 2rem 5rem" },
        }}
      >
        <CardHeader
          sx={{
            padding: "1rem 0rem",
            "& .MuiCardHeader-content": {
              flex: "none",
            },
          }}
          action={
            <IconButton aria-label="settings">
              <EditIcon />
            </IconButton>
          }
          title=" YOUR DISH"
        />
        <CardContent
          sx={{
            width: "100%",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              backgroundColor: grey[400],
              padding: "1rem",
              gap: 4,
            }}
          >
            <Typography
              sx={{ fontSize: { xs: 16, md: 18 } }}
              component="span"
            >
              4 serving
            </Typography>
            <Typography
              sx={{ fontSize: { xs: 16, md: 18 } }}
              component="span"
            >
              600 kcal
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: { xs: 18, md: 24 } }}
            component="span"
          >
            Ingredients
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              gap: 5,
            }}
          >
            <RecipeIngridientsColumn />
            <RecipeIngridientsColumn />
            <RecipeIngridientsColumn />
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
