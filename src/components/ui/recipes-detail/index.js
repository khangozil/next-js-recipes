import Link from "next/link";

export default function RecipesDetailsItem({ getRecipeDetails }) {
  return (
    <div>
      <Link href={"/recipes-list"} className="text-blue-600 hover:underline">
        Go back
      </Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 flex justify-center">
            <img
              src={getRecipeDetails?.image}
              alt={getRecipeDetails?.name}
              className="w-full lg:w-4/5 rounded-lg object-cover shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              {getRecipeDetails?.name}
            </h2>
            <div className="mt-4 flex flex-col space-y-2">
              <p className="text-xl text-gray-600">
                {getRecipeDetails?.mealType[0]}
              </p>
              <p className="text-xl text-gray-800">
                {getRecipeDetails?.cuisine}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-800">Ingredients</h3>
                <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-600">
                  {getRecipeDetails?.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  Instructions
                </h3>
                <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-600">
                  {getRecipeDetails?.instructions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
