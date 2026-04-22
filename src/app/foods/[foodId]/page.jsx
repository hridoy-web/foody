import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { PiBowlFoodFill } from "react-icons/pi";
import { TbCoinTaka } from "react-icons/tb";


const FoodDetailsPage = async ({ params }) => {

    const { foodId } = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const foodsData = await res.json();
    const { id, dish_name, image_link, category, rating, price, cuisine, origin_and_popularity, cooking_steps, approximate_nutrition_per_serving, main_ingredients, possible_price_in_dhaka } = foodsData.data;

    return (
        <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-5 bg-gray-100 border-2 rounded-3xl border-gray-200 p-5">

            {/* left side box */}
            <div className="flex flex-col items-center ">
                <figure className="w-[300px] min-h-auto">
                    <Image
                        src={image_link}
                        alt={dish_name}
                        width={300}
                        height={400}
                    />
                </figure>

                <span className="text-gray-600 text-base font-medium">{origin_and_popularity}</span>

                <div className="flex flex-wrap gap-2 mt-6">
  {/* Home Cooked */}
  <div className="btn border-none bg-gradient-to-r from-green-400 to-blue-500 text-white hover:scale-105 transition-transform">
    Home: {possible_price_in_dhaka.home_cooked}
  </div>

  {/* Small Restaurant */}
  <div className="btn border-none bg-linear-to-r from-orange-400 to-rose-500 text-white hover:scale-105 transition-transform">
    Street: {possible_price_in_dhaka.street_food_or_small_restaurant}
  </div>

  {/* Cafe */}
  <div className="btn border-none bg-linear-to-r from-purple-500 to-indigo-600 text-white hover:scale-105 transition-transform">
    Cafe: {possible_price_in_dhaka.cafe_or_healthy_eatery}
  </div>
</div>
            </div>

            {/* middle box */}
            <div className="space-y-3 ">

                <h2 className="font-bold text-2xl">{dish_name}</h2>
                <p className=" font-semibold text-gray-500">{cuisine}</p>
                <div className="flex gap-3">
                    <button className="btn btn-soft btn-secondary text-base font-bold text-gray-800"><PiBowlFoodFill />{category}</button>
                    <button className='btn btn-soft btn-warning text-base font-bold text-gray-800'><FaStar /> Rating: {rating}</button>
                </div>
                <div className="p-2 ">
                    <h2 className="font-semibold text-xl md:text-2xl mb-3">Recipe:</h2>
                    <ul className="list-disc space-y-2 font-medium text-gray-600 ">
                        {
                            cooking_steps.map((step, index) => <li key={index} className="leading-relaxed">{step}</li>)
                        }
                    </ul>
                </div>
            </div>

            {/* right side box */}
            <div className="mt-3 md:mt-0">
                <div className="overflow-x-auto ">
                    <h3 className=" text-xl md:text-2xl font-semibold mb-4 text-gray-800">Nutrition Facts (Per Serving)</h3>
                    <table className="table w-full border border-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-gray-600">Nutrient</th>
                                <th className="text-gray-600">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-medium">Calories</td>
                                <td>{approximate_nutrition_per_serving.calories}</td>
                            </tr>
                            <tr>
                                <td className="font-medium">Protein</td>
                                <td>{approximate_nutrition_per_serving.protein}</td>
                            </tr>
                            <tr>
                                <td className="font-medium">Carbohydrates</td>
                                <td>{approximate_nutrition_per_serving.carbohydrates}</td>
                            </tr>
                            <tr>
                                <td className="font-medium">Fat</td>
                                <td>{approximate_nutrition_per_serving.fat}</td>
                            </tr>
                            <tr>
                                <td className="font-medium">Fiber</td>
                                <td>{approximate_nutrition_per_serving.fiber}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mt-3 p-5">
                    <h2 className="font-semibold text-2xl mb-4">Main Ingredients:</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {
                            main_ingredients.map((ingredient, index) => (
                                <ul
                                    key={index}
                                    className="list-disc font-medium text-gray-600"
                                >
                                    <li className="text-gray-700 font-medium">{ingredient}</li>
                                </ul>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FoodDetailsPage;