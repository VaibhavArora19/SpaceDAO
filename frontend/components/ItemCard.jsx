import Image from "next/image";
import React from "react";

const ItemCard = ({ img, price, isBook }) => {
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
          src={img}s
          width={400}
          height={300}
          className="object-cover rounded-xl "
        />
      )}

      <div className="absolute bottom-0 bg-black/60 w-full py-2 rounded-br-xl rounded-bl-xl">
        <div className="flex justify-between items-center">
          <button className="px-5 py-2 ml-3 rounded-lg bg-white/20 text-gray-200 hover:bg-[#6b6b6b]/50">
            Buy
          </button>

          <p className="px-4 text-white font-semibold text-xl">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
