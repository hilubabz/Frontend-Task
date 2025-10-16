import { Route, Routes } from "react-router-dom";
import GuessTheNumber from "./GuessTheNumber";
import HolyGrailLayout from "./HolyGrailLayout";
import ProgressBar from "./ProgressBar";
import ContactForm from "./ContactForm";
import LikeButton from "./LikeButton";
import LoadingSkeleton from "./LoadingSkeleton";
import Toast from "./Toast";
import OTP from "./OTP";
import DataTable from "./DataTable";
import Tabs from "./Tabs";
import Weather from "./Weather";
import CharacterCounter from "./CharacterCounter";
import { Link } from "react-router-dom";
// import { useState } from "react";
import ToDoList from "./ToDoList";
import Form from "./Form";
import { parseAsInteger, useQueryState } from "nuqs";
import Data from "./Data";

function App() {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  return (
    <>
      <nav className={"flex space-x-4 flex-wrap pb-1 bg-gray-100 z-20"}>
        <Link
          to={"/"}
          className={`text-lg ${page === 1 ? "font-semibold" : "text-gray-500"} relative transition-all ease-in-out duration-500`}
          onClick={() => setPage(1)}
        >
          Guess_The_Number
          <div
            className={`absolute left-0 bottom-0 h-1 rounded-xl bg-black ${page === 1 ? "w-full" : "w-0"} transition-all ease-in-out duration-500`}
          ></div>
        </Link>
        <Link
          to={"/holyGrail"}
          className={`text-lg ${page === 2 ? "font-semibold" : "text-gray-500"} relative transition-all ease-in-out duration-500`}
          onClick={() => setPage(2)}
        >
          Holy_Grail
          <div
            className={`absolute left-0 bottom-0 h-1 rounded-xl bg-black ${page === 2 ? "w-full" : "w-0"} transition-all ease-in-out duration-500`}
          ></div>
        </Link>
        <Link
          to={"/progressBar"}
          className={`text-lg ${page === 3 ? "font-semibold" : "text-gray-500"} relative transition-all ease-in-out duration-500`}
          onClick={() => setPage(3)}
        >
          Progress_Bar
          <div
            className={`absolute left-0 bottom-0 h-1 rounded-xl bg-black ${page === 3 ? "w-full" : "w-0"} transition-all ease-in-out duration-500`}
          ></div>
        </Link>
        <Link
          to={"/contactForm"}
          className={`text-lg ${page === 4 ? "font-semibold" : "text-gray-500"} relative transition-all ease-in-out duration-500`}
          onClick={() => setPage(4)}
        >
          Contact_Form
          <div
            className={`absolute left-0 bottom-0 h-1 rounded-xl bg-black ${page === 4 ? "w-full" : "w-0"} transition-all ease-in-out duration-500`}
          ></div>
        </Link>
        <Link
          to={"/likeButton"}
          className={`text-lg ${page === 5 ? "font-semibold" : "text-gray-500"} relative transition-all ease-in-out duration-500`}
          onClick={() => setPage(5)}
        >
          Like_Button
          <div
            className={`absolute left-0 bottom-0 h-1 rounded-xl bg-black ${page === 5 ? "w-full" : "w-0"} transition-all ease-in-out duration-500`}
          ></div>
        </Link>
        <Link
          to={"/loadingSkeleton"}
          className={`text-lg ${page === 6 ? "font-semibold" : "text-gray-500"} relative transition-all ease-in-out duration-500`}
          onClick={() => setPage(6)}
        >
          Loading_Skeleton
          <div
            className={`absolute left-0 bottom-0 h-1 rounded-xl bg-black ${page === 6 ? "w-full" : "w-0"} transition-all ease-in-out duration-500`}
          ></div>
        </Link>
        <Link
          to={"/toast"}
          className={`text-lg ${page === 7 ? "font-semibold" : "text-gray-500"} relative transition-all ease-in-out duration-500`}
          onClick={() => setPage(7)}
        >
          Toast
          <div
            className={`absolute left-0 bottom-0 h-1 rounded-xl bg-black ${page === 7 ? "w-full" : "w-0"} transition-all ease-in-out duration-500`}
          ></div>
        </Link>
        <Link
          to={"/OTP"}
          className={`text-lg ${page === 8 ? "font-semibold" : "text-gray-500"} relative transition-all ease-in-out duration-500`}
          onClick={() => setPage(8)}
        >
          OTP
          <div
            className={`absolute left-0 bottom-0 h-1 rounded-xl bg-black ${page === 8 ? "w-full" : "w-0"} transition-all ease-in-out duration-500`}
          ></div>
        </Link>
        <Link
          to={"/dataTable"}
          className={`text-lg ${page === 9 ? "font-semibold" : "text-gray-500"} relative transition-all ease-in-out duration-500`}
          onClick={() => setPage(9)}
        >
          Data_Table
          <div
            className={`absolute left-0 bottom-0 h-1 rounded-xl bg-black ${page === 9 ? "w-full" : "w-0"} transition-all ease-in-out duration-500`}
          ></div>
        </Link>
        <Link
          to={"/tabs"}
          className={`text-lg ${page === 10 ? "font-semibold" : "text-gray-500"} relative transition-all ease-in-out duration-500`}
          onClick={() => setPage(10)}
        >
          Tabs
          <div
            className={`absolute left-0 bottom-0 h-1 rounded-xl bg-black ${page === 10 ? "w-full" : "w-0"} transition-all ease-in-out duration-500`}
          ></div>
        </Link>
        <Link
          to={"/weather"}
          className={`text-lg ${page === 11 ? "font-semibold" : "text-gray-500"} relative transition-all ease-in-out duration-500`}
          onClick={() => setPage(11)}
        >
          Weather
          <div
            className={`absolute left-0 bottom-0 h-1 rounded-xl bg-black ${page === 11 ? "w-full" : "w-0"} transition-all ease-in-out duration-500`}
          ></div>
        </Link>
        <Link
          to={"/characterCounter"}
          className={`text-lg ${page === 12 ? "font-semibold" : "text-gray-500"} relative transition-all ease-in-out duration-500`}
          onClick={() => setPage(12)}
        >
          Character_Counter
          <div
            className={`absolute left-0 bottom-0 h-1 rounded-xl bg-black ${page === 12 ? "w-full" : "w-0"} transition-all ease-in-out duration-500`}
          ></div>
        </Link>
        <Link
          to={"/toDoList"}
          className={`text-lg ${page === 13 ? "font-semibold" : "text-gray-500"} relative transition-all ease-in-out duration-500`}
          onClick={() => setPage(13)}
        >
          To_Do_List
          <div
            className={`absolute left-0 bottom-0 h-1 rounded-xl bg-black ${page === 13 ? "w-full" : "w-0"} transition-all ease-in-out duration-500`}
          ></div>
        </Link>
        <Link
          to={"/rhf"}
          className={`text-lg ${page === 14 ? "font-semibold" : "text-gray-500"} relative transition-all ease-in-out duration-500`}
          onClick={() => setPage(14)}
        >
          React_Hook_Form
          <div
            className={`absolute left-0 bottom-0 h-1 rounded-xl bg-black ${page === 14 ? "w-full" : "w-0"} transition-all ease-in-out duration-500`}
          ></div>
        </Link>
        <Link
          to={"/data"}
          className={`text-lg ${page === 15 ? "font-semibold" : "text-gray-500"} relative transition-all ease-in-out duration-500`}
          onClick={() => setPage(15)}
        >
          React_Hook_Form_Data
          <div
            className={`absolute left-0 bottom-0 h-1 rounded-xl bg-black ${page === 15 ? "w-full" : "w-0"} transition-all ease-in-out duration-500`}
          ></div>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<GuessTheNumber />} />
        <Route path="/holyGrail" element={<HolyGrailLayout />} />
        <Route path="/progressBar" element={<ProgressBar />} />
        <Route path="/contactForm" element={<ContactForm />} />
        <Route path="/likeButton" element={<LikeButton />} />
        <Route path="/loadingSkeleton" element={<LoadingSkeleton />} />
        <Route path="/toast" element={<Toast />} />
        <Route path="/OTP" element={<OTP />} />
        <Route path="/dataTable" element={<DataTable />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/characterCounter" element={<CharacterCounter />} />
        <Route path="/toDoList" element={<ToDoList />} />
        <Route path="/rhf" element={<Form setPage={setPage} />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </>
  );
}

export default App;
