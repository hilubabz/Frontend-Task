import { useState } from "react";
import datas from "./assets/data.json";
import logo from "/images/logo.svg";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

type Icon = "all" | "active" | "inactive";
const ExtensionManager = () => {
  const [data, setData] = useState(datas);
  const [showIcons, setShowIcons] = useState<Icon>("all");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  // console.log(data)
  const handleToggle = (index: number) => {
    setData((prev) =>
      prev.map((val, ind) =>
        ind === index ? { ...val, isActive: !val.isActive } : val,
      ),
    );
    console.log(data);
  };

  const handleDelete = (index: number) => {
    setData((prev) => prev.filter((_val, ind) => index !== ind));
  };
  return (
    <div
      className={`px-4 lg:px-40 ${darkMode ? "bg-gradient-to-b from-black to-blue-950" : "bg-gradient-to-b from-white to-blue-50"} min-h-[100vh] pt-5 transition-colors ease-in-out duration-500`}
    >
      <div
        className={`rounded-xl ${darkMode ? "bg-gray-700" : "bg-white"} p-3 shadow-xl flex items-center justify-between`}
      >
        <div className="">
          <img src={logo} className="h-full w-auto object-cover" />
        </div>
        {!darkMode ? (
          <div
            className="h-10 w-10 bg-gray-300 flex items-center justify-center rounded-xl"
            onClick={() => setDarkMode(true)}
          >
            <IoMoonOutline />
          </div>
        ) : (
          <div
            className="h-10 w-10 bg-gray-300 flex items-center justify-center rounded-xl"
            onClick={() => setDarkMode(false)}
          >
            <IoSunnyOutline />
          </div>
        )}
      </div>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div
          className={`font-bold text-3xl text-center mt-5 ${darkMode ? "text-white" : ""}`}
        >
          Extension List
        </div>

        <div className="flex items-center justify-center space-x-4 mt-4">
          <div
            className={`px-4 py-2 rounded-3xl  ${showIcons === "all" ? "bg-[#C42518] text-white" : darkMode ? "bg-gray-500 text-white" : "bg-white"} transition-all ease-in-out duration-500`}
            onClick={() => setShowIcons("all")}
          >
            All
          </div>
          <div
            className={`px-4 py-2 rounded-3xl  ${showIcons === "active" ? "bg-[#C42518] text-white" : darkMode ? "bg-gray-500 text-white" : "bg-white"} transition-all ease-in-out duration-500`}
            onClick={() => setShowIcons("active")}
          >
            Active
          </div>
          <div
            className={`px-4 py-2 rounded-3xl  ${showIcons === "inactive" ? "bg-[#C42518] text-white" : darkMode ? "bg-gray-500 text-white" : "bg-white"} transition-all ease-in-out duration-500`}
            onClick={() => setShowIcons("inactive")}
          >
            Inactive
          </div>
        </div>
      </div>
      <div className="mt-10 grid lg:grid-cols-3 gap-5 auto-rows-fr">
        {data
          .filter(
            (val) =>
              showIcons === "all" ||
              (val.isActive && showIcons === "active") ||
              (!val.isActive && showIcons === "inactive"),
          )
          .map((val, index) => (
            <div
              key={val.name}
              className={`border ${darkMode ? "bg-[#1F2535] text-white border-gray-700" : "bg-white border-gray-200"} p-4 rounded-2xl flex flex-col h-full transition-all ease-in-out duration-500`}
            >
              <div className="flex items-center space-x-3 my-2">
                <div className="h-12 w-12 flex-shrink-0 overflow-hidden">
                  <img
                    src={val.logo}
                    alt={val.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <div className="font-semibold">{val.name}</div>
                  <div className="text-sm">{val.description}</div>
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between">
                <div
                  className="border border-gray-300 px-2 py-1 rounded-xl cursor-pointer"
                  onClick={() => handleDelete(index)}
                >
                  Remove
                </div>
                <div
                  className={`h-5 w-9 rounded-xl relative transition-all ease-in-out duration-500 ${
                    val.isActive ? "bg-[#C82319]" : "bg-gray-300"
                  }`}
                  onClick={() => handleToggle(index)}
                >
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white ${
                      val.isActive
                        ? "left-[95%] -translate-x-[95%]"
                        : "left-[5%]"
                    } transition-all ease-in-out duration-500`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExtensionManager;
