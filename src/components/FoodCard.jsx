import Image from 'next/image'
import Link from 'next/link';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { TbCoinTaka } from 'react-icons/tb';

const FoodCard = ({ foods }) => {

  const { id, dish_name, image_link, category, rating, price, origin_and_popularity } = foods;

  // console.log(dish_name);

  return (
    <div className="card bg-base-200 border-2 border-gray-200 rounded-3xl cursor-pointer ">
      <figure className="w-[300px] h-[400px]">
        <Image
          src={image_link}
          alt={dish_name}
          width={300}
          height={400}
          className='object-contain'
        />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="card-title">
          {dish_name}
          <div className="badge bg-[#ad00c0] text-white border-[#e600ff] font-semibold">{category}</div>
        </h2>
        <div className='flex gap-3 items-center'>
          <button className='btn text-base font-bold text-gray-800'><FaStar /> Rating: {rating}</button>
          <button className='btn text-base font-bold text-gray-800'><TbCoinTaka size={20} />Price: {price}</button>
        </div>
        <p className=' text-gray-600 text-base'>{origin_and_popularity}</p>
        <div className="card-actions items-center justify-between">

          <Link href={`/foods/${id}`}>
            <button className='btn bg-[#0967C2] text-white border-[#0059b3] cursor-pointer transition-all duration-500 hover:scale-95'><BsInfoCircleFill />Show Details</button>
          </Link>

          <button className='btn bg-[#03C755] text-white border-[#00b544]cursor-pointer transition-all duration-500 hover:scale-95'><FaShoppingCart />Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;