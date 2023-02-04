import React from "react";
import ItemCard from "./ItemCard";
import book1 from "../public/books/book1.jpg";
import book2 from "../public/books/book2.jpg";
import book3 from "../public/books/book3.jpg";
import book4 from "../public/books/book4.jpg";
import book5 from "../public/books/book5.jpg";
import book6 from "../public/books/book6.jpg";
import book7 from "../public/books/book7.jpg";
import book8 from "../public/books/book8.jpg";

import Link from "next/link";

const DUMMY_DATA = [
  {
    id: "d1",
    img: book1,
    price: 19.78,
  },
  {
    id: "d2",
    img: book2,
    price: 31.82,
  },
  {
    id: "d3",
    img: book3,
    price: 24.52,
  },
  {
    id: "d4",
    img: book4,
    price: 11.43,
  },
  {
    id: "d5",
    img: book5,
    price: 19.78,
  },
  {
    id: "d6",
    img: book6,
    price: 13.97,
  },
  {
    id: "d7",
    img: book7,
    price: 12.18,
  },
  {
    id: "d8",
    img: book8,
    price: 19.78,
  },
];

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
        {DUMMY_DATA.map((book) => (
          <ItemCard
            isBook={true}
            key={book.id}
            img={book.img}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;
