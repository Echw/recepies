"use client";

import { Box, TextField, Typography } from "@mui/material";
import React from "react";

interface RecipeStepDetailsProps {
  recipe?: any;
  editMode?: boolean;
}

export const RecipeStepDetails = ({
  recipe,
  editMode = false,
}: RecipeStepDetailsProps) => {
  // console.log(recipe.ingredients);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: { xs: "1rem 3rem", md: "5rem 10rem" },
        gap: 4,
      }}
    >
      <Typography variant="h4" color="text.primary">
        Preparation
      </Typography>
      {editMode ? (
        <Box>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Add new step"
          />
          <Box>
            <Typography variant="h6" color="text.secondary">
              STEP III
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Integer hendrerit mauris id turpis consequat molestie. Mauris dui
              massa, blandit eu neque sed, porta congue risus. Aenean vitae
              tortor sapien. Nulla sed mauris consectetur, vestibulum est non,
              volutpat purus. Sed euismod lorem id nisl vehicula egestas. Donec
              rutrum augue et nulla pharetra pharetra. Nunc mi turpis, varius eu
              lacus quis, dignissim suscipit erat. Sed faucibus erat vitae
              placerat tempor. Nam vitae ante ligula. Mauris a tortor cursus,
              vehicula quam sit amet, maximus leo. Fusce eget tempor tellus, a
              commodo orci.
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box>
          {recipe.preparations.map((step: any, index: number) => (
            <Box key={step.id}>
              <Typography variant="h6" color="text.secondary">
                {`STEP ${index + 1}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {step.step}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
