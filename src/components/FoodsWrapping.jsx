import { useEffect, useState } from "react";
import { getAllFoods, getOnceKindOfFoods } from "../services";

const FoodsWrapping = ({ category }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (category != "none") {
      const fetchOnceKindOfFoods = async () => {
        const data = await getOnceKindOfFoods(category);
        setFoods(data);
      };

      fetchOnceKindOfFoods();
    } else {
      const fetchFoods = async () => {
        const data = await getAllFoods();
        setFoods(data);
      };
      fetchFoods();
    }
  }, [category]);

  return (
    <ul className="grid grid-cols-1 gap-8 mt-8">
      {foods.map((food) => (
        <li
          key={food.id}
          className="drop-shadow-lg p-4 rounded-md bg-white border-2"
        >
          <img
            className="w-full aspect-square object-cover rounded-md"
            src={food.image_url}
            alt={food.name}
          />
          <h3 className="text-center text-xl font-semibold my-4">
            {food.name}
          </h3>
          <p className="flex flex-row items-center justify-center text-lg font-bold">
            {food.calories} calories
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FoodsWrapping;
