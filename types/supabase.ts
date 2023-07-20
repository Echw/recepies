export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Ingredients: {
        Row: {
          created_at: string | null
          id: number
          ingredients: Json | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          ingredients?: Json | null
        }
        Update: {
          created_at?: string | null
          id?: number
          ingredients?: Json | null
        }
        Relationships: []
      }
      recipies: {
        Row: {
          calories: number | null
          id: number
          ingredients: number | null
          inserted_at: string
          name: string | null
          preparation: Json | null
          servings: number | null
          updated_at: string
        }
        Insert: {
          calories?: number | null
          id?: number
          ingredients?: number | null
          inserted_at?: string
          name?: string | null
          preparation?: Json | null
          servings?: number | null
          updated_at?: string
        }
        Update: {
          calories?: number | null
          id?: number
          ingredients?: number | null
          inserted_at?: string
          name?: string | null
          preparation?: Json | null
          servings?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "recipies_ingredients_fkey"
            columns: ["ingredients"]
            referencedRelation: "Ingredients"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
