import FoodCard from "@/components/FoodCard";


const FoodsPage = async () => {

    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods')
    const data = await res.json()
    const foodsData = data.data;

    console.log(foodsData, "foodspage");

    return (
        <div className="my-10">
            <h2 className="text-3xl font-bold mb-6">Total food items: {foodsData.length}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 ">
                {
                    foodsData.map(foods => <FoodCard key={foods.id} foods={foods} ></FoodCard> )
                }
            </div>
        </div>
    );
};

export default FoodsPage;