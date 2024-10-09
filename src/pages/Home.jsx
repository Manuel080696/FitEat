import { useState } from "react";
import FoodsWrapping from "../components/FoodsWrapping";

export const Home = () => {
  const [category, setCategory] = useState("none");

  return (
    <main>
      <nav className="flex flex-row items-center justify-center w-full py-6">
        <ul className="flex flex-row gap-4">
          <li
            className="w-14 rounded-full bg-white p-2 drop-shadow-lg"
            onClick={() => setCategory("meat")}
          >
            <img src="/meat.png" alt="meat" />
          </li>
          <li
            className="w-14 rounded-full bg-white p-2 drop-shadow-lg"
            onClick={() => setCategory("vegetable")}
          >
            <img
              className="w-10 rounded-ful"
              src="/vegetable.png"
              alt="vegetable"
            />
          </li>
          <li
            className="w-14 rounded-full bg-white p-2 drop-shadow-lg"
            onClick={() => setCategory("fish")}
          >
            <img className="w-10 rounded-ful" src="/fish.png" alt="fish" />
          </li>
          <li
            className="w-14 rounded-full bg-white p-2 drop-shadow-lg"
            onClick={() => setCategory("legume")}
          >
            <img className="w-10 rounded-ful" src="/legume.png" alt="legume" />
          </li>
        </ul>
      </nav>

      <section className="px-3">
        <h2 className="text-2xl font-bold">Recomendaciones para ti</h2>
        <FoodsWrapping category={category} />
      </section>
    </main>
  );
};
