import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { FaBook, FaGamepad } from "react-icons/fa";
import { BsMusicNoteBeamed, BsPeopleFill } from "react-icons/bs";
import { AiOutlineCodeSandbox, AiFillTrophy } from "react-icons/ai";
import { FiDownloadCloud } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";

import Image from "next/image";

const links = [
  {
    name: "Dashboard",
    icon: <MdDashboard size={20} />,
    link: "/",
  },
  {
    name: "Games",
    icon: <FaGamepad size={20} />,
    link: "/games",
  },
  {
    name: "Books",
    icon: <FaBook size={20} />,
    link: "/books",
  },
  {
    name: "Music",
    icon: <BsMusicNoteBeamed size={20} />,
    link: "/music",
  },
  {
    name: "Codes",
    icon: <AiOutlineCodeSandbox size={20} />,
    link: "/codes",
    line: true,
  },
  {
    name: "My Items",
    icon: <MdDashboard size={20} />,
    link: "/",
  },
  {
    name: "Achievements",
    icon: <AiFillTrophy size={20} />,
    link: "/",
  },
  {
    name: "Community",
    icon: <BsPeopleFill size={20} />,
    link: "/",
    line: true,
  },
  {
    name: "Downloads",
    icon: <FiDownloadCloud size={20} />,
    link: "/",
  },
  {
    name: "Settings",
    icon: <IoMdSettings size={20} />,
    link: "/",
  },
];

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      className={`bg-[#1e1e1e] min-h-screen  ${
        openMenu ? "w-72" : "w-16"
      }  text-gray-100 p-3 duration-300`}
    >
      <div className="flex justify-end">
        <HiMenuAlt3
          size={25}
          className={`cursor-pointer mb-4 ${!openMenu && "w-12"}`}
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
      </div>

      <div className="flex flex-col gap-4 realtive mt-4">
        {links.map((link, i) => (
          <Link
            key={link.name}
            href={link.link}
            className={`flex gap-2 items-center font-medium  hover:bg-gray-600 rounded-md p-2 group ${
              link?.line && "mb-5"
            }`}
          >
            <div className="">{link.icon}</div>
            <p
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !openMenu && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {link.name}
            </p>
            <p
              className={`${
                openMenu && "hidden"
              } absolute left-48 z-10 bg-white font-semibold whitespace-pre w-0 text-gray-900 rounded-md drop-shadow-lg shadow-xl p-0  overflow-hidden group-hover:scale-110 group-hover:left-20 group-hover:duration-300 group-hover:w-fit group-hover:px-2 group-hover:py-1`}
            >
              {link.name}
            </p>
          </Link>
        ))}
      </div>

      <div
        className={`absolute bottom-5 flex items-center  p-1 -ml-1 rounded-md bg-black/30  cursor-pointer ${
          openMenu && "w-fit py-2"
        }`}
      >
        <Image
          src="/newpfp.png"
          height={40}
          width={40}
          className="rounded-md mr-2"
        />
        <p className={`${!openMenu && "hidden"} text-lg `}>Aman Mandal</p>
        <div className={`${!openMenu && "hidden"} ml-10`}>
          <IoExitOutline size={20} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
