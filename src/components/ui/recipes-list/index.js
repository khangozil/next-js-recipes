import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from "next/link";
  

export default function RecipesList({recipeList}){
    console.log(recipeList);
    
    return(
        <div>
            <div className="p-4 mx-auto lg:max-w-6x1 md:max-w-4x1 sm:max-w-full"></div>
            <h2 className="text-4x1 font-bold text-gray mb-12">Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    recipeList && recipeList.length > 0 ?

                    recipeList.map(recipe => <Link href={`/recipes-list/${recipe.id}`}>
                    <Card>
                        <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                <img
                                src={recipe.image}
                                alt={recipe.name}
                                className="h-full w-full object-cover object-top"
                                ></img>

                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-900">{recipe.name}</h3>
                                <div className="mt-4 flex items-center flex-wrap gap-2">
                                    <p className="text-lg text-gray-600">Rating : {recipe.rating} </p>
                                    <hr></hr>
                                    
                                    <div className="ml-auto">
                                        <p className="text-lg text-gray-600 font-bold">{recipe.cuisine}</p>
                                    </div>
                                </div>
                                <p className="text-lg text-gray-600">No of Rating : {recipe.reviewCount}</p>
                            </div>
                        </CardContent>
                    </Card>
                    </Link>)

                    :null
                }
            </div>
        </div>
    );
}