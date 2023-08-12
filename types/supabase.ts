export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Ingredients: {
        Row: {
          amount: number | null;
          created_at: string | null;
          id: number;
          ingredient: string | null;
          recipe_id: number | null;
          unit: string | null;
        };
        Insert: {
          amount?: number | null;
          created_at?: string | null;
          id?: number;
          ingredient?: string | null;
          recipe_id?: number | null;
          unit?: string | null;
        };
        Update: {
          amount?: number | null;
          created_at?: string | null;
          id?: number;
          ingredient?: string | null;
          recipe_id?: number | null;
          unit?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "Ingredients_recipe_id_fkey";
            columns: ["recipe_id"];
            referencedRelation: "Recipes";
            referencedColumns: ["id"];
          }
        ];
      };
      Preparations: {
        Row: {
          created_at: string | null;
          id: number;
          recipe_id: number | null;
          step: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          recipe_id?: number | null;
          step?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          recipe_id?: number | null;
          step?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "Preparations_recipe_id_fkey";
            columns: ["recipe_id"];
            referencedRelation: "Recipes";
            referencedColumns: ["id"];
          }
        ];
      };
      Recipes: {
        Row: {
          calories: number | null;
          id: number;
          inserted_at: string;
          name: string | null;
          servings: number | null;
          updated_at: string;
        };
        Insert: {
          calories?: number | null;
          id?: number;
          inserted_at?: string;
          name?: string | null;
          servings?: number | null;
          updated_at?: string;
        };
        Update: {
          calories?: number | null;
          id?: number;
          inserted_at?: string;
          name?: string | null;
          servings?: number | null;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
