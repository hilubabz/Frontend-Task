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
import ExtensionManager from "./ExtensionManager";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const pages = [
  { id: 1, name: "Guess_The_Number", path: "/" },
  { id: 2, name: "Holy_Grail", path: "/holyGrail" },
  { id: 3, name: "Progress_Bar", path: "/progressBar" },
  { id: 4, name: "Contact_Form", path: "/contactForm" },
  { id: 5, name: "Like_Button", path: "/likeButton" },
  { id: 6, name: "Loading_Skeleton", path: "/loadingSkeleton" },
  { id: 7, name: "Toast", path: "/toast" },
  { id: 8, name: "OTP", path: "/OTP" },
  { id: 9, name: "Data_Table", path: "/dataTable" },
  { id: 10, name: "Tabs", path: "/tabs" },
  { id: 11, name: "Weather", path: "/weather" },
  { id: 12, name: "Character_Counter", path: "/characterCounter" },
  { id: 13, name: "To_Do_List", path: "/toDoList" },
  { id: 14, name: "React_Hook_Form", path: "/rhf" },
  { id: 15, name: "React_Hook_Form_Data", path: "/data" },
  { id: 16, name: "Extension_Manager", path: "/extensionManager" },
];

function App() {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="fixed top-5 left-5 z-30 pl-5 text-black text-2xl flex items-center space-x-3">
        {!open ? (
          <CiMenuBurger onClick={() => setOpen(true)} />
        ) : (
          <>
            <IoMdClose onClick={() => setOpen(false)} />
            <div>Mini Projects</div>
          </>
        )}
      </div>
      <nav
        className={`flex flex-col space-y-4 overflow-auto pb-1 bg-gray-100 z-20 fixed left-0 top-0 h-[100vh] w-[70vw] md:w-[30vw] lg:w-[20vw] pt-15 pl-5 ${open ? "" : "lg:-translate-x-[20vw] -translate-x-[70vw] md:-translate-x-[30vw]"} transition-all ease-in-out duration-500`}
      >
        <div className="flex-1 overflow-y-auto pl-5 pr-3 py-4 space-y-3">
          {pages.map((p) => (
            <Link
              key={p.id}
              to={p.path}
              onClick={() => {
                setPage(p.id);
                setOpen(false);
              }}
              className={`block text-base font-medium ${
                page === p.id
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-gray-800"
              } transition-all duration-300 ease-in-out`}
            >
              <div className={`inline-block relative`}>
                {p.name}
                <div
                  className={`absolute left-0 bottom-0 h-[2px] rounded-xl bg-black transition-all duration-500 ${
                    page === p.id ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            </Link>
          ))}
        </div>
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
        <Route path="/extensionManager" element={<ExtensionManager />} />
      </Routes>
    </>
  );
}

export default App;
