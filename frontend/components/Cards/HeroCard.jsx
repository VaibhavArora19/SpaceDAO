import Image from "next/image";
import React from "react";

const HeroCard = () => {
  return (
    <div className="flex justify-around px-4 gap-6 mt-5 ">
      <div className="flex w-[48%] hover:scale-[1.02] delay-75 cursor-pointer transition ease-in-out  bg-[#B29CDB] rounded-xl px-4 py-10  justify-center items-center gap-10">
        <div>
          <p className="text-xl font-semibold text-purple-100">
            Amazing apps, codes and musics backed by community!
          </p>
          <p className="text-sm  mt-3 text-gray-200">Be the community..</p>
        </div>
        <Image src="/eg.png" width={350} height={350} />
      </div>
      <div className="flex w-[49%] hover:scale-[1.02] cursor-pointer delay-75 transition ease-in-out  bg-[#81C995] rounded-xl px-4 py-10  justify-center items-center gap-10">
        <div>
          <p className="text-xl font-semibold text-purple-100">
            Support your favourite application and get rewards
          </p>
          <p className="text-sm  mt-3 text-gray-200">Let's grow together..</p>
        </div>
        <Image src="/eg2.png" width={350} height={350} />
      </div>
    </div>
  );
};

export default HeroCard;
