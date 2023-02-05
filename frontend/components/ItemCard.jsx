import Image from "next/image";
import React from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { FaMoneyCheck } from "react-icons/fa";

const ItemCard = ({ img, price, isBook, days }) => {
  const buyHandler = () => {
    console.log("BUY");
  };

  const supportHandler = () => {
    console.log("Support");
  };

  return (
    <div className="relative w-fit hover:scale-[1.04] transition-all ease-in-out ">
      <div className="absolute h-full w-full bg-black/30 rounded-xl" />
      {isBook ? (
        <Image
          src={img}
          width={200}
          height={200}
          className="object-cover rounded-xl "
        />
      ) : (
        <Image
          src={img}
          s
          width={400}
          height={300}
          className="object-cover rounded-xl "
        />
      )}

      <div className="absolute bottom-0 bg-black/60 w-full py-2 rounded-br-xl rounded-bl-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={buyHandler}
              className="px-4 font-Grotesk tracking-wide py-2 ml-3 rounded-lg bg-green-600/70 text-gray-200 hover:bg-green-800"
            >
              BUY
            </button>
            
            <GiReceiveMoney
              className="cursor-pointer text-yellow-500"
              size={25}
            
              onClick={supportHandler}
            />
          </div>

          <p className="mr-2 text-white font-semibold text-lg">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
