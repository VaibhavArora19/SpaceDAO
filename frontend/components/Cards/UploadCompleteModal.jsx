import { BsFillPatchCheckFill } from "react-icons/bs";

const Backdrop = () => {
  return (
    <div className="fixed top-0 left-0 z-10  h-screen w-screen bg-black/60 backdrop-blur-sm"></div>
  );
};

const UploadCompleteModal = ({ onClose }) => {
  return (
    <>
      <Backdrop />
      <div className="bg-white z-20 shadow-xl drop-shadow-md w-[370px] rounded-lg pt-14 pb-8 px-4 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <p className="text-2xl font-bold font-Grotesk text-center">SpaceDAO</p>
        <p className="text-gray-500 font-semibold mb-5 text-center gap-5 flex items-center px-4 mt-5">
          <span>
            <BsFillPatchCheckFill size={25} />
          </span>
          Data Uploaded Successfully!
        </p>
        <button
          onClick={onClose}
          className="bg-[#2563EB] rounded-lg text-white font-semibold py-3 w-full "
        >
          Close
        </button>
      </div>
    </>
  );
};

export default UploadCompleteModal;
