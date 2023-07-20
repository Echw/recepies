import { RecipeList } from "@/components/RecipeList/RecipeList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <RecipeList />
    </main>
  );
}
