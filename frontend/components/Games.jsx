import React from "react";
import ItemCard from "./ItemCard";
import game1 from "../public/games/game1.jpg";
import game2 from "../public/games/game2.jpg";
import game3 from "../public/games/game3.jpg";
import game4 from "../public/games/game4.jpg";
import Link from "next/link";

const DUMMY_DATA = [
  {
    id: "d1",
    img: game1,
    price: 21.22,
  },
  {
    id: "d2",
    img: game2,
    price: 41.82,
  },
  {
    id: "d3",
    img: game3,
    price: 34.14,
  },
  {
    id: "d4",
    img: game4,
    price: 121.93,
  },
];

const Games = () => {
  return (
    <div className="mt-10 px-5">
      <div className="flex justify-between items-center">
        <h2 className="font-Grotesk text-2xl font-semibold mb-3 text-gray-800">
          Popular Games
        </h2>
        <Link href="/games" className="text-purple-800 underline">
          View all
        </Link>
      </div>
      <div className="flex gap-3">
        {DUMMY_DATA.map((game) => (
          <ItemCard key={game.id} img={game.img} price={game.price} />
        ))}
      </div>
    </div>
  );
};

export default Games;
