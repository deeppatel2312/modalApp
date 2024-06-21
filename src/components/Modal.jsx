// components/Modal.js
import { useState, useEffect } from "react";
import { ProfileImage } from "../../public/profile.svg";
import Image from "next/image";
const Modal = ({ showModal, setShowModal }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (showModal) {
      setShowAnimation(true);
      document.body.style.overflow = "hidden";
    } else {
      setShowAnimation(false);
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <>
      {showModal && (
        <div
          className={`fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
            showAnimation ? "opacity-100" : "opacity-0"
          }`}
          onAnimationEnd={() => {
            if (!showAnimation) setShowModal(false);
          }}
        >
          <div
            className={`bg-white p-4 rounded-[20px] drop-shadow-lg relative max-w-[900px] w-full mx-2 sm:mx-auto transform transition-transform duration-300 ${
              showAnimation ? "scale-100" : "scale-95"
            }`}
          >
            <button
              className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 p-1 mt-2 mr-2 text-gray-400 rounded-full shadow-md"
              onClick={() => {
                setShowModal(false);
                setShowAnimation(false);
              }}
            >
              &#10005;
            </button>
            <div className="flex items-center mb-4">
              <Image
                className="h-10 w-10 rounded-full mr-3"
                src="/profile.svg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div>
                <h2 className="text-xl font-bold">Posting to Merazonia</h2>
                <p className="text-sm text-gray-600">Posting to Merazonia</p>
              </div>
            </div>
            <textarea
              className="w-full p-2 border rounded"
              placeholder="What do you want to talk about?"
              rows={5}
            ></textarea>
            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-4">
                {/* <div className="space-x-2"> */}
                <button className="flex w-[100px] flex-col items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none">
                  <div className="text-2xl">
                    <Image
                      className="rounded-full"
                      src="/smiley.svg"
                      width={20}
                      height={20}
                      alt="Emoji"
                    />
                  </div>
                  <span className="mt-1 text-sm font-medium">Emoji</span>
                </button>
                <button className="flex flex-col w-[100px] items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none">
                  <div className="text-2xl">
                    <Image
                      className="rounded-full"
                      src="/video.svg"
                      width={20}
                      height={20}
                      alt="Emoji"
                    />
                  </div>
                  <span className="mt-1 text-sm font-medium">Photo</span>
                </button>
                <button className="flex flex-col w-[100px] items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none">
                  <div className="text-2xl">
                    <Image
                      className="rounded-full"
                      src="/photo.svg"
                      width={20}
                      height={20}
                      alt="Video"
                    />
                  </div>
                  <span className="mt-1 text-sm font-medium">Video</span>
                </button>
                <button className="flex flex-col w-[100px] items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none">
                  <div className="text-2xl">
                    <Image
                      className="rounded-full"
                      src="/gif.png"
                      width={20}
                      height={20}
                      alt="GIF"
                    />
                  </div>
                  <span className="mt-1 text-sm font-medium">GIF</span>
                </button>
                <button className="flex flex-col w-[100px] items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none">
                  <div className="text-2xl">
                    <Image
                      className="rounded-full"
                      src="/poll.png"
                      width={20}
                      height={20}
                      alt="Poll "
                    />
                  </div>
                  <span className="mt-1 text-sm font-medium">Poll</span>
                </button>
                {/* </div> */}
              </div>
              <div>
                <button
                  disabled
                  className="flex justify-center items-center gap-x-2 gap-y-3 px-5 py-2 text-white bg-[#EE2E12] rounded-full disabled:bg-opacity-10 w-[170px]"
                >
                  <span>
                    <Image src="/fill.svg" width={20} height={20} alt="Poll " />
                  </span>
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
