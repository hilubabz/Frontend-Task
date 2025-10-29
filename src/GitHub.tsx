import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState, type FormEvent } from "react";
import useGithubData from "./hooks/useGithubData";
import Profile from "./components/Profile";
import useGithubUserData from "./hooks/useGithubUserData";
import Repositories from "./components/Repositories";
import PieChartComponent from "./charts/PieChartComponent";
import BarChartComponent from "./charts/BarChartComponent";
import useGithubUserCommits from "./hooks/useGithubUserCommits";
import LineChartComponent from "./charts/LineChartComponent";
import ProfileSkeleton from "./components/ProfileSkeleton";
import RepositoriesSkeleton from "./components/RepositoriesSkeleton";
import ChartSkeleton from "./components/ChartSkeleton";
import ViewAnimation from "./framer-motion/ViewAnimation";

const GitHub = () => {
  const [query, setQuery] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(true);
  const repos = useGithubData(query);
  const userData = useGithubUserData(query);
  const userCommits = useGithubUserCommits(query);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setQuery("");
    setActive(false);
    repos.refetch();
    userData.refetch();
    userCommits.refetch();
    // console.log('Success')
  };
  // console.log(data)
  // console.log(userData.data);
  // console.log(userCommits)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <div
      className={`px-20 pt-10 min-h-[100vh] bg-[var(--bg)] text-[var(--text)] transition-all duration-500 ease-in-out`}
    >
      <div
        className={`flex justify-between p-5 shadow-lg rounded-xl items-center bg-[var(--card)]`}
      >
        <div className="flex gap-30 w-[75%] items-center">
          <div className="font-semibold text-xl">Repo Analyzer</div>
          <div className="flex gap-2 w-[70%] items-center border-gray-300 border-1 p-2 rounded-xl">
            <CiSearch />
            <form onSubmit={(e) => handleSubmit(e)} className="w-full">
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-0"
                placeholder="Enter GitHub username..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className="flex items-center text-3xl gap-2">
          {darkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
          <div
            className={`relative w-14 h-7 ${darkMode ? "bg-white" : "bg-gray-400"} rounded-full cursor-pointer transition-all duration-500`}
            onClick={() => setDarkMode((prev) => !prev)}
          >
            <div
              className={`absolute top-0.5 ${darkMode ? "left-[95%] -translate-x-[95%] bg-gray-400" : "left-0.5 bg-white"} w-6 h-6 rounded-full transition-all duration-500`}
            ></div>
          </div>
        </div>
      </div>
      {userData.isLoading && repos.isLoading && userCommits.isLoading ? (
        <div className="grid grid-cols-2 mt-10 max-w-[100vw] gap-4">
          <div className="space-y-4">
            <ProfileSkeleton />
            <ChartSkeleton title="Top Languages" />
            <ChartSkeleton title="Recent Commits" />
          </div>
          <div className="space-y-4">
            <RepositoriesSkeleton />
            <ChartSkeleton title="Most Starred Repositories" />
          </div>
        </div>
      ) : active ? (
        <></>
      ) : userData.data === undefined ? (
        <div className=" text-center pt-10 text-2xl font-semibold text-red-500">
          No data found
        </div>
      ) : (
        <div className="grid grid-cols-2 mt-10 max-w-[100vw] gap-4">
          <div className="space-y-4">
            <Profile userData={userData.data} />

            <ViewAnimation>
              <PieChartComponent data={repos.data ?? []} />
            </ViewAnimation>

            <ViewAnimation>
              <LineChartComponent data={userCommits.data ?? []} />
            </ViewAnimation>
          </div>
          <div className="space-y-4">
            <Repositories data={repos.data ?? []} />
            <ViewAnimation>
              <BarChartComponent repos={repos.data ?? []} />
            </ViewAnimation>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHub;
