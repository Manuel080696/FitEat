import { useEffect, useState } from "react";
import { CameraAI } from "../components/CameraAI";
import { getFoodCalories } from "../services";

export const Camera = () => {
  const [object, setObject] = useState([]);
  const [sum, setSum] = useState(0);
  useEffect(() => {
    if (object.length != 0) {
      const foodArray = object.forEach(async (food) => {
        const data = await getFoodCalories(food);
        return data;
      });

      if (foodArray.length != 0) {
        let tempSum = 0;
        for (let i = 0; i < foodArray.length; i++) {
          tempSum += foodArray[i];
        }
        setSum(tempSum);
      } else {
        setSum(foodArray);
      }
    }
  }, [object]);

  return (
    <main>
      <CameraAI object={object} setObject={setObject} />
      <section>
        <h3>Calorías totales</h3>
        {sum && <p>{sum}</p>}
      </section>
    </main>
  );
};
