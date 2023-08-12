import React from "react";
import { RecipeStepDetails } from "../ui/RecipeStepDetails";
import { RecipeDetailsBox } from "../RecipeDetailsBox/RecipeDetailsBox";

interface RecipeProps {
  recipe?: any;
  editMode?: boolean;
}

export const Recipe = ({ recipe, editMode = false }: RecipeProps) => {
  return (
    <>
      <RecipeDetailsBox recipe={recipe} editMode={editMode} />
      <RecipeStepDetails recipe={recipe} editMode={editMode} />
    </>
  );
};
