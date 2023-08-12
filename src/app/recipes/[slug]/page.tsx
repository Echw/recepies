"use client";

import { Recipe } from "@/components/Recipe/Recipe";
import supabase from "@/utils/supabase";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const RecipePage = () => {
  const [recipe, setRecipe] = useState<any>();
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();

  const fechRecipe = async () => {
    setLoading(true);
    try {
      const { data } = await supabase
        .from("Recipes")
        .select(
          `*, parts:Parts(*, ingredients:Ingredients(*)), preparations:Preparations(*)`
        )
        .match({ id: slug })
        .single();

      if (data) {
        console.log(data);
        setRecipe(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fechRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  if (!recipe) {
    return <>No recipe</>;
  }

  return <Recipe recipe={recipe} />;
};

export default RecipePage;
