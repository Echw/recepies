"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

interface RecipeStepDetailsProps {
  recipe?: any;
  editMode?: boolean;
}

export const RecipeStepDetails = ({
  recipe,
  editMode = false,
}: RecipeStepDetailsProps) => {
  // console.log(recipe.ingredients);

  const [stepValues, setStepValues] = useState<string[]>([]);

  const addStepField = () => {
    const newStepKey = stepValues.length;
    const updatedStepValues = [...stepValues, `Step ${newStepKey}`];
    setStepValues(updatedStepValues);
  };

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
          {stepValues.map((element, index) => (
            <TextField
              key={index}
              id={`outlined-multiline-static-${index}`}
              label={`Step ${index + 1}`}
              multiline
              rows={4}
              defaultValue={`Add description`}
              fullWidth
            />
          ))}
          <Box>
            <Button variant="text" onClick={addStepField}>
              + Add new step
            </Button>
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
