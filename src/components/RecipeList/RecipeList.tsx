"use client";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import supabase from "@/utils/supabase";
// import { useEffect, useState } from "react";

export const RecipeList = async () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [recipes, setRecipes] = useState<any>([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const { data } = await supabase.from("recipies").select();
  //     setRecipes(data);
  //     // setIsLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  // console.log(recipes);
  // console.log(recipes?[0].name);

  const { data: recipes } = await supabase.from("recipies").select();

  if (!recipes) {
    return <>No recipes</>;
  }

  console.log(recipes);
  return (
    <List
      sx={{
        width: "100%",
        margin: "1rem",
        bgcolor: "background.paper",
      }}
    >
      {recipes?.map((recipe) => (
        <ListItem
          key={recipe.id}
          alignItems="flex-start"
          sx={{
            padding: 0,
            width: "50rem",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage:
              "url(https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <ListItemText
            sx={{
              margin: 0,
              height: "100%",
              padding: "2rem",
              background:
                "linear-gradient(88deg, #4A4A4A 19.79%, rgba(217, 217, 217, 0.00) 100%)",
            }}
            primary={recipe.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline-block" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {recipe.servings} servings
                </Typography>
                <Typography
                  sx={{ display: "inline-block" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {recipe.calories} calories
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};
