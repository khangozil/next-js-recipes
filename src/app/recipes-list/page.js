import RecipesList from "@/components/ui/recipes-list";

async function fetchListOfRecipes() {
  try {
    const apiRespone = await fetch("https://dummyjson.com/recipes");
    const data = await apiRespone.json();

    return data?.recipes

  } catch (e) {
    throw new Error(e);
  }


}

export default async function Recipes() {
    const recipeList = await fetchListOfRecipes();

  return <RecipesList recipeList={recipeList} ></RecipesList>;
}
