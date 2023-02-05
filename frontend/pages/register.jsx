import UploadCompleteModal from "@/components/Cards/UploadCompleteModal";
import useInput from "@/hooks/useInput";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const register = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [selectedType, setSelectedType] = useState("Game");
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const thumbnailTypes = ["image/png", "image/jpeg", "image/jpg"];

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim !== "");

  const {
    value: enteredDescription,
    isValid: enteredDescriptionIsValid,
    hasError: descriptionInputHasError,
    valueChangeHandler: descriptionChangedHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: resetDescriptionInput,
  } = useInput((value) => value.trim !== "");

  const {
    value: enteredPrice,
    isValid: enteredPriceIsValid,
    hasError: priceInputHasError,
    valueChangeHandler: priceChangedHandler,
    inputBlurHandler: priceBlurHandler,
    reset: resetPriceInput,
  } = useInput((value) => value > 0);

  const thumbnailUploadHandler = (event) => {
    let selectedFile = event.target.files[0];

    if (selectedFile && thumbnailTypes.includes(selectedFile.type)) {
      setThumbnail(selectedFile);
    } else {
      setThumbnail(null);
    }
  };

  const uploadDataHandler = (event) => {
    let selectedFile = event.target.files[0];

    if (selectedFile) {
      setUploadedFile(selectedFile);
    } else {
      setThumbnail(null);
    }
  };

  const selectDataTypeHandler = (event) => {
    setSelectedType(event.target.value);
  };

  const closeModalHandler = () => {
    router.push("/");
    setOpenModal(false);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    let formIsValid = false;

    if (
      enteredNameIsValid &&
      enteredDescriptionIsValid &&
      enteredPriceIsValid &&
      thumbnail &&
      uploadedFile
    ) {
      formIsValid = true;
    }

    if (
      !enteredNameIsValid ||
      !enteredDescriptionIsValid ||
      !enteredPriceIsValid
    ) {
      return alert("Fill the whole form");
    }

    setOpenModal(true);

    resetNameInput();
    resetDescriptionInput();
    resetPriceInput();
  };
  return (
    <>
      <div className="flex justify-between mx-auto lg:px-60 md:px-20 sm:px-10 py-16">
        <form onSubmit={submitFormHandler} className="text-black w-[50%]  ">
          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            htmlFor="dataname"
          >
            Data Name
          </label>
          {nameInputHasError && (
            <p className="text-red-600">Enter your name.</p>
          )}

          <input
            required
            className="shadow appearance-none  rounded-lg w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                border-2 border-gray-300  mb-5"
            id="dataname"
            type="text"
            placeholder="Rock Music"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          ></input>

          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            htmlFor="DataDescription"
          >
            Data Description
          </label>
          <textarea
            required
            className="shadow appearance-none h-36 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                border-2 border-gray-300 mb-5"
            id="DataDescription"
            placeholder="The greatest Rock Music ever produced"
            onChange={descriptionChangedHandler}
            onBlur={descriptionBlurHandler}
            value={enteredDescription}
          ></textarea>

          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            htmlFor="dataThumbnail"
          >
            Data Thumbnail
          </label>
          <input
            required
            className="block mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-100 dark:placeholder-gray-400 p-2"
            id="dataThumbnail"
            type="file"
            onChange={thumbnailUploadHandler}
          ></input>

          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            htmlFor="DataPrice"
          >
            Data Price
          </label>
          <input
            className="shadow appearance-none  rounded-lg w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                border-2 border-gray-300  mb-5"
            id="DataPrice"
            type="number"
            placeholder="Enter the price in ETH"
            onChange={priceChangedHandler}
            onBlur={priceBlurHandler}
            value={enteredPrice}
          ></input>

          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            htmlFor="DataType"
          >
            Select the Type of Data
          </label>
          <select
            id="DataType"
            value={selectedType}
            onChange={selectDataTypeHandler}
            name="Type"
            required
            className=" p-3 w-full rounded-lg shadow focus:outline-none focus:shadow-outline border-2 border-gray-300 mb-5"
          >
            <option value="Game">Game</option>
            <option value="Music">Music</option>
            <option value="Code">Code</option>
            <option value="Book">Book</option>
          </select>

          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            htmlFor="uploadData"
          >
            Upload Data
          </label>
          <input
            required
            className="block mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-100 dark:placeholder-gray-400 p-2"
            id="uploadData"
            type="file"
            onChange={uploadDataHandler}
          ></input>

          <button
            type="submit"
            className="mt-2 w-full inline-block px-6 py-2.5 bg-black text-white font-medium leading-normal  shadow-md hover:bg-gray-900
                text-lg  font-Grotesk focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out rounded-2xl"
          >
            Push Data On-Chain
          </button>
        </form>

        <div className="flex flex-col shadow-2xl rounded-md px-6 w-[40%] py-10 h-full items-center ">
          <h2 className="uppercase text-black font-medium text-sm  text-center">
            ARE YOU READY ?
          </h2>
          <p className="text-gray-400 text-center mt-4">
            FLY TO THE MOON WITH DATA
          </p>
          <Image
            src="/panda.png"
            alt="panda"
            width="700"
            height="800"
            className="
              mt-8 sticky top-10 rounded-lg"
          />
        </div>
      </div>
      {openModal && <UploadCompleteModal onClose={closeModalHandler} />}
    </>
  );
};

export default register;
