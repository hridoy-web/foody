import Image from 'next/image'
import { FaStar } from 'react-icons/fa';

const FoodCard = ({ foods }) => {

  const { dish_name, image_link, category, rating, price, origin_and_popularity } = foods;

  // console.log(dish_name);

  return (
    <div className="card bg-base-200 border-2 border-gray-200 rounded-3xl cursor-pointer ">
      <figure className="w-[300px] h-[400px] w-full">
        <Image 
          src={image_link}
          alt={dish_name}
          width={300}
          height={400}
          className='object-contain'
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title">
          {dish_name}  
        </h2>
        <div className='flex gap-4 '>
          <div className="badge bg-[#622069] text-white border-[#591660] font-semibold">{category}</div>
          <div className='badge font-semibold  bg-[#FEE502] text-[#181600] border-[#f1d800]'><FaStar /> {rating}</div>
        </div>
        <p className=' text-gray-600 text-base'>{origin_and_popularity}</p>
        <div className="card-actions justify-end">
          <div className="btn font-semibold bg-[#03C755] text-white border-[#00b544] rounded-lg">Price: {price}</div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;