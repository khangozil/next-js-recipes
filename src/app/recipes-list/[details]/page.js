import RecipesDetailItem from "@/components/ui/recipes-detail";
async function fetchRecipesDetail (currentRecipesID){
    try{

        const apiRespone = await fetch (`https://dummyjson.com/recipes/${currentRecipesID}`);
        const data = apiRespone.json();
        
        return data;

    }catch(e){
        throw new Error(e)
    }
}

export default async function RecipesDetail({params}){

    const getRecipeDetails = await fetchRecipesDetail(params?.details);
    return<RecipesDetailItem getRecipeDetails={getRecipeDetails}></RecipesDetailItem>
}