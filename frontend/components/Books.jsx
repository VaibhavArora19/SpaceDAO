import React from "react";
import ItemCard from "./ItemCard";

import Link from "next/link";
import { books } from "@/data/Books";

const Books = () => {
  return (
    <div className="mt-10 px-5">
      <div className="flex justify-between items-center">
        <h2 className="font-Grotesk text-2xl font-semibold mb-3 text-gray-800">
          Popular Books
        </h2>
        <Link href="/books" className="text-purple-800 underline">
          View all
        </Link>
      </div>
      <div className="flex gap-3">
        {books.map((book, i) => (
          <>
            {i <= 7 && (
              <ItemCard
                isBook={true}
                key={book.id}
                img={book.img}
                price={book.price}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Books;
