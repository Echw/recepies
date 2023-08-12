"use client";
import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import supabase from "@/utils/supabase";
import { Box, ListItemButton } from "@mui/material";

export const RecipeList = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fechRecipes = async () => {
    setLoading(true);
    try {
      const { data } = await supabase.from("Recipes").select();

      if (data) {
        setRecipes(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fechRecipes();
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {recipes?.map((recipe) => (
        <ListItemButton
          key={recipe.id}
          alignItems="flex-start"
          sx={{
            padding: 0,
            width: "90%",
            margin: "2rem",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage:
              "url(https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
          href={`/recipes/${recipe.id}`}
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
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{ display: "inline-block" }}
                  component="span"
                  variant="body2"
                  color="white"
                >
                  {recipe.servings} servings
                </Typography>
                <Typography
                  sx={{ display: "inline-block" }}
                  component="span"
                  variant="body2"
                  color="white"
                >
                  {recipe.calories} calories
                </Typography>
              </Box>
            }
          />
        </ListItemButton>
      ))}
    </List>
  );
};
