import { useEffect, useState } from "react";
import { CameraAI } from "../components/CameraAI";
import { getFoodCalories } from "../services";

export const Camera = () => {
  const [object, setObject] = useState([]);
  const [calories, setCalories] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const fetchCalories = async () => {
      if (object.length !== 0) {
        try {
          const foodPromises = object.map(async (food) => {
            const data = await getFoodCalories(food);
            return data || 0;
          });

          const foodCalories = await Promise.all(foodPromises);

          setCalories(foodCalories);

          const totalCalories = foodCalories.reduce(
            (acc, curr) => acc + curr,
            0
          );
          setSum(totalCalories);
        } catch (error) {
          console.error("Error al obtener las calorías:", error);
          setSum(0);
        }
      }
    };

    fetchCalories();
  }, [object]);

  return (
    <main className="flex flex-col gap-2 relative w-full h-screen">
      <CameraAI object={object} setObject={setObject} />
      <section className="flex flex-col absolute bottom-0 w-full bg-white pb-24 px-4">
        <h3 className="text-xl font-bold text-center">Total calories</h3>
        <ul className="flex flex-col overflow-y-scroll max-h-14">
          {object.map((food, index) => (
            <li key={index}>
              <h3>{food}</h3>
              <h4>{calories[index] ? calories[index] : "Loading..."}</h4>
            </li>
          ))}
        </ul>
        <hr className="my-2" />
        {sum != 0 ? <p>{sum} Calories</p> : <p>Not detected foods.</p>}
      </section>
    </main>
  );
};
